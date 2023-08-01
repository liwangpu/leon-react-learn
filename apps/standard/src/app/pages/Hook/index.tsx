import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.less';
import * as _ from 'lodash';

const Box: React.FC<{ title?: string }> = ({ title }) => {

  const boxRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const intersectingDetector = (() => {
      const intersectingObs = new IntersectionObserver(entries => {
        console.log(`visible:`, title, entries[0].isIntersecting);
      }, { threshold: 1 });

      return {
        observe() {
          intersectingObs.observe(boxRef.current);
        },
        disconnect() {
          intersectingObs.disconnect();
        },
      };
    })();

    intersectingDetector.observe();
    return () => {
      intersectingDetector.disconnect();
    };
  }, []);
  return (
    <div className={styles['box']} ref={boxRef}>
      {title}
    </div>
  );
}

Box.displayName = 'Box';




const Page: React.FC = observer(() => {

  const sectionRef = useRef<HTMLDivElement>();
  const [val, setVal] = useState<Array<string>>(['小明', '毛毛', '阿瓜']);

  const test = () => {
    console.log(`-------------------------------------------------`,);
    setVal([...val.reverse()]);




    // const boxEl = boxRef.current;
    // boxEl.style.top = '-80px';
  };


  return (
    <div className={styles['page']}>

      <div className={styles['page__header']}>
        <Button onClick={test}>测试</Button>
      </div>

      <div className={styles['page__content']}>

        <div className={styles['section']} ref={sectionRef}>
          {/* <Box /> */}
          {val.map(it => (<Box key={it} title={it} />))}
        </div>

      </div>

    </div>
  );
});

Page.displayName = 'Page';

export default Page;

