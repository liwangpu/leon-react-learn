import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.less';
import { TMapHelper } from './TMap';



const mapHelper = new TMapHelper({
  scripts: [
    {
      key: 'TMap-gljs',
      src: `https://map.qq.com/api/gljs?v=1.exp&key=6ZIBZ-UIUC4-WSQUP-KZXGR-UGMVO-EEFI5`,
      onload(self) {
        console.log(`self:`, self);
        self.TMap = (window as any).TMap;
      },
    },
    {
      key: 'geoLocation',
      src: `https://mapapi.qq.com/web/mapComponents/geoLocation/v/geolocation.min.js`,
      onload(self) {
        self.qq = (window as any).qq;
      },
    }
  ],
});

const mapKey = `6ZIBZ-UIUC4-WSQUP-KZXGR-UGMVO-EEFI5`;

const Page: React.FC = observer(() => {

  const mapRef = useRef<HTMLDivElement>(null);
  const test = () => {

  };

  useEffect(() => {
    // (async () => {
    //   await mapHelper.initialize({});
    //   const center = mapHelper.TMap.LatLng(39.984120, 116.307484);
    //   mapHelper.map = mapHelper.TMap.Map(mapRef.current, {
    //     zoom: 18,
    //     center,
    //   });
    // })();
  }, []);


  return (
    <div className={styles['page']}>

      <div className={styles['page__header']}>
        <Button onClick={test}>测试</Button>
      </div>

      <div className={styles['page__content']} ref={mapRef}>


      </div>

    </div>
  );
});

Page.displayName = 'Page';

export default Page;

