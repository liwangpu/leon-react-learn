import React, { useState, memo, useRef, useEffect, useCallback } from 'react';
import { faker } from '@faker-js/faker';
import styles from './index.module.less';
import classnames from 'classnames';

const Hook: React.FC = memo(() => {

  const [title, setTitle] = useState(faker.name.fullName());
  const boxRef = useRef<HTMLDivElement>();
  const test = () => {
    setTitle(faker.name.fullName());
  };

  useEffect(() => {

    // console.log(`ref:`,boxRef.current);

    let observer = new MutationObserver((mutationRecords) => {
      console.log(mutationRecords);
      console.log(mutationRecords[0].target['style']);
      // console.log(JSON.stringify(mutationRecords)); // console.log(the changes)
    });

    // 观察除了特性之外的所有变动
    observer.observe(boxRef.current, {
      childList: true, // 观察直接子节点
      subtree: false, // 及其更低的后代节点
      attributes: true,
      // attributeFilter: ['style'],
      characterDataOldValue: true // 将旧的数据传递给回调
    });
    return () => {

    };
  }, []);

  const addChilNode = () => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = '我是子节点';

    boxRef.current.appendChild(div);
  };


  const changeFirstNodeStyle = () => {
    // const item: HTMLDivElement = boxRef.current.querySelector('.item');
    // item.style.background = 'orange';
    // console.log(`item:`,item);

    boxRef.current.style.background = 'orange';
  };

  const changeByCss = () => {
    const style = document.createElement('style');
    style.innerHTML = `.my-box{ background-color:green !important;}`;
    document.body.appendChild(style);
  };


  return (
    <div className={styles['hook']}>
      <div className={styles['hook__header']}>
        <button onClick={addChilNode}>添加一个子节点</button>
        <button onClick={changeFirstNodeStyle}>修改节点样式</button>
        <button onClick={changeByCss}>通过css修改节点样式</button>
      </div>
      <div className={styles['hook__content']}>
        <div className={classnames(styles['box'],'my-box')} ref={boxRef}></div>
      </div>

    </div>
  );
});

export default Hook;
