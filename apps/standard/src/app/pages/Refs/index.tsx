import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle, useCallback } from 'react';
import { faker } from '@faker-js/faker';
import styles from './index.module.less';

export default function Hook(props: any): JSX.Element {

  const [title, setTitle] = useState('默认');
  const cardRef = useRef();
  const componentRef = useRef<{ getTitle: Function }>();

  const toggleVisible = () => {
    // setCardVisible(!cardVisible)
    console.log(`ref:`, componentRef);
  };

  const registryRef = (el: any) => {
    console.log(`registry:`, el);
    componentRef.current = el;
  };

  const triggerMethod = () => {
    // console.log(`funComponentRef:`, componentRef.current);
    const title = componentRef.current?.getTitle();
    console.log(`com title:`, title);
  };

  return (
    <div className={styles['refs']}>
      <div className={styles['header']}>
        <button onClick={() => setTitle(faker.name.fullName())}>更新当前组件标题</button>
        <button onClick={triggerMethod}>获取子组件标题</button>
      </div>
      <div className={styles['content']}>
        <h3>当前组件标题: {title}</h3>
        {/* {cardVisible && <Card ref={cardRef} />} */}
        <SimpleFuntionComponentWithRef ref={registryRef} />
        <SimpleClassComponentWithRef />
      </div>
    </div >
  );
}

function Card(props: any, ref: any): JSX.Element {
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

function SimpleFuntionComponent(props: any, ref: any): JSX.Element {
  const [title, setTitle] = useState('默认');
  const testGetTitle = useCallback(() => {
    return title;
  }, []);
  useImperativeHandle(ref, () => ({
    getTitle: () => {
      return title;
      // return testGetTitle();
    }
  }), []);
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

