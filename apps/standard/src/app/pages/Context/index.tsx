import React, { useState, useContext, memo } from 'react';
import { faker } from '@faker-js/faker';
import styles from './index.module.less';

interface ContextAImplement {
  title: string;
}

const ContextA = React.createContext<ContextAImplement>(null);
const ContextB = React.createContext<string>(null);

const Context: React.FC = memo(() => {

  const [title, setTitle] = useState(faker.name.fullName());

  return (
    <div className={styles['context']}>
      <div className={styles['header']}>
        <button onClick={() => setTitle(faker.name.fullName())}>切换标题</button>
        {/* <button onClick={() => setTitle(faker.name.fullName())}>切换标题</button>
        <button onClick={() => setCardState(!cardState)}>切换Card显隐状态</button> */}
      </div>
      <div className={styles['content']}>
        <p>Context A Title: {title}</p>
        <ContextA.Provider value={{ title }}>
          <ContextB.Provider value={'sdf'}>
            <FirstLayer />
          </ContextB.Provider>
        </ContextA.Provider>
      </div>
    </div>
  );
});

export default Context;

const FirstLayer = (props: any) => {
  const cxtA = useContext(ContextA);
  const cxtB = useContext(ContextB);
  console.log(`first layer:`, cxtA);
  console.log(`first layer:`, cxtB);
  return (
    <div style={{ border: '1px solid #cacdd1', padding: '12px' }}>
      <p>第一层级</p>
      <ContextA.Provider value={{ title: 'layer 1' }}>
        <SecondLayer />
      </ContextA.Provider>
    </div>
  );
}

const SecondLayer = (props: any) => {
  const cxtA = useContext(ContextA);
  const cxtB = useContext(ContextB);
  console.log(`second layer:`, cxtA);
  console.log(`second layer:`, cxtB);
  return (
    <div style={{ border: '1px solid #cacdd1', padding: '12px' }}>
      <p>第二层级</p>
      <ThirdLayer />
    </div>
  );
}

class ThirdLayer extends React.PureComponent {
  // static contextTypes={

  // }
  render(): React.ReactNode {
    console.log(`third layer:`, this.context);
    return (
      <div style={{ border: '1px solid #cacdd1', padding: '12px' }}>
        <p>第三层级</p>
      </div>
    );
  }
}

