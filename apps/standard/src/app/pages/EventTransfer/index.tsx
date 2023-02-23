import React, { useState, memo, useMemo, useEffect, useRef } from 'react';
import { faker } from '@faker-js/faker';
import styles from './index.module.less';
import classnames from 'classnames';

const items = [];
for (let idx = 1; idx <= 30; idx++) {
  items.push(`${idx}`);
}

const EventTransfer: React.FC = memo(() => {

  const [activedItem, setActivedItem] = useState<string>();
  const lastItemRef = useRef<HTMLDivElement>();
  const ListItems = useMemo(() => {
    // return (<div className={styles['list']} >
    //   {
    //     items.map(it => (
    //       <div className={classnames(
    //         styles['list__item'],
    //         {
    //           [styles['list__item--actived']]: activedItem === it
    //         }
    //       )} key={it} onClick={e => activeItem(it)}>
    //         <span>{it}</span>
    //       </div>
    //     ))
    //   }
    // </div>);

    return (<>
      {
        items.map(it => (
          <div className={classnames(
            styles['list__item'],
            {
              [styles['list__item--actived']]: activedItem === it
            }
          )} key={it} onClick={e => activeItem(it)}>
            <span>{it}</span>
          </div>
        ))
      }
    </>);
  }, [activedItem]);

  const activeItem = (name: string) => {
    setActivedItem(name);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      console.log(`title:`, entries[0]);
    });
    obs.observe(lastItemRef.current);

    return () => {
      obs.disconnect();
    };
  }, []);

  return (
    <div className={styles['event-transfer']}>
      <div className={styles['header']}>
        {/* <button onClick={test}>切换标题</button> */}
      </div>
      <div className={styles['content']}>
        {ListItems}
        <div className={classnames(styles['list__item'], 'my-item')} ref={lastItemRef}>最后一个</div>
        {/* <div className={styles['toolbar']}></div> */}
      </div>
    </div>
  );
});

export default EventTransfer;
