import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { faker } from '@faker-js/faker';
import styles from './index.module.less';

export default function Hook(props: any): JSX.Element {

  const [cardVisible, setCardVisible] = useState(true);
  const cardRef = useRef();
  const funComponentRef = useRef<{ getTitle: Function }>();

  const toggleVisible = () => {
    // setCardVisible(!cardVisible)
    console.log(`ref:`, funComponentRef);
  };

  const registryRef = el => {
    console.log(`registry:`, el);
  };

  const triggerMethod = () => {
    console.log(`funComponentRef:`, funComponentRef.current);
    const title = funComponentRef.current?.getTitle();
    console.log(`com title:`, title);
  };

  return (
    <div className={styles['refs']}>
      <div className={styles['header']}>
        <button onClick={triggerMethod}>获取组件标题</button>
      </div>
      <div className={styles['content']}>
        {/* {cardVisible && <Card ref={cardRef} />} */}
        <SimpleFuntionComponentWithRef ref={registryRef} />
        <SimpleClassComponentWithRef />
      </div>
    </div >
  );
}

function Card(props: any, ref): JSX.Element {
  // console.log(`card props:`, props);
  const [title, setTitle] = useState('默认');
  return (
    <div>
      <button onClick={() => setTitle(faker.name.fullName())}>更新标题</button>
      <p>Function标题: {title}</p>
    </div>
  );
}

const CardWithRef = forwardRef(Card);

function SimpleFuntionComponent(props: any, ref): JSX.Element {
  const [title, setTitle] = useState('默认');
  useImperativeHandle(ref, () => ({
    getTitle: () => {
      return title;
    }
  }));
  return (
    <div>
      <p>function component</p>
      <button onClick={() => setTitle(faker.name.fullName())}>更新标题</button>
      <p>标题: {title}</p>
    </div>
  );
}

const SimpleFuntionComponentWithRef = forwardRef(SimpleFuntionComponent);

interface SimpleClassComponentProps {
  forwardRef: any;
}

interface SimpleClassComponentState {
  title: string;
}

class SimpleClassComponent extends React.Component<SimpleClassComponentProps, SimpleClassComponentState> {

  constructor(props: SimpleClassComponentProps) {
    super(props);
    this.state = { title: '默认' };
    const forwardRefType = typeof props.forwardRef;
    if (props.forwardRef) {
      if (forwardRefType) {
        switch (forwardRefType) {
          case 'function':
            props.forwardRef(this);
            break;
          case 'object':
            props.forwardRef.current = this;
            break;
          default:
            break;
        }
      }
    }
    this.updateTitle = this.updateTitle.bind(this);
    this.getTitle = this.getTitle.bind(this);
  }

  updateTitle() {
    this.setState({ title: faker.name.fullName() });
  }

  getTitle() {
    return this.state.title;
  }

  render(): React.ReactNode {
    return (
      <div>
        <p>class component</p>
        <button onClick={this.updateTitle}>更新标题</button>
        <p>标题: {this.state.title}</p>
      </div>
    );
  }

}

const SimpleClassComponentWithRef = forwardRef((props, ref) => <SimpleClassComponent forwardRef={ref}{...props} />);

