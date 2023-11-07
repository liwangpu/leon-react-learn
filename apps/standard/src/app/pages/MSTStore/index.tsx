import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { Instance, types, getSnapshot } from 'mobx-state-tree';
import React from 'react';
import styles from './index.module.less';
import { faker } from '@faker-js/faker';
import { connectReduxDevtools } from 'mst-middlewares';
import { SimplePage } from '@react-learn/shared';

const hostingStore = (store: any) => {
  connectReduxDevtools(require("remotedev"), store);
};

// hostingStore(stu);

const AT = types.model({
  id: types.maybeNull(types.string),
  name: types.maybeNull(types.string),
});

const BT = types.model({
  remark: types.maybeNull(types.string),
});

const CT = types.compose(AT, BT);


const store = CT.create({

});

hostingStore(store);

const Page: React.FC = observer(() => {

  const test = () => {
    // store.active('a');

    // console.log(`store:`, getSnapshot(store));
  };

  return (
    <SimplePage header={(
      <>
        <Button onClick={test}>测试</Button>
      </>
    )} >

    </SimplePage>
  );
});

Page.displayName = 'Page';

export default Page;
