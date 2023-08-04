import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { types, getSnapshot, onSnapshot, applySnapshot, onAction } from 'mobx-state-tree';
import React, { useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { connectReduxDevtools } from 'mst-middlewares';
import { SimplePage } from '@react-learn/shared';

const generateNickName = () => {
  return new Promise(res => {
    setTimeout(() => {
      res(faker.name.fullName());
    }, 500);
  });
};

const hostingStore = (store: any) => {
  connectReduxDevtools(require("remotedev"), store);
};

const StudentModel = types.model({
  id: types.string,
  name: types.string,
  age: types.number,
})
  .views(self => ({
    get nickName() {
      // console.log(`generate nick name!`,);
      return `Mr. ${self.name}`;
    }
  }))
  .actions(self => ({
    setName(name: string) {
      self.name = name;
    },

  }));

const stu = StudentModel.create({
  id: 'a',
  name: '毛毛',
  age: 12,
});

hostingStore(stu);

let snapshot: any;

const Page: React.FC = observer(() => {

  const test = () => {
    stu.setName(faker.name.fullName());
  };

  const handleSnapshot = () => {
    snapshot = getSnapshot(stu);
    // console.log(`snapshot:`, snapshot);
  };

  const handleRecover = () => {
    applySnapshot(stu, snapshot)
  };

  useEffect(() => {
    const disposer = onAction(stu, params => {
      console.log(`on action:`, params);
    });
    return () => {
      disposer();
    };
  }, []);

  return (
    <SimplePage header={(
      <>
        <Button onClick={handleSnapshot}>存储</Button>
        <Button onClick={handleRecover}>恢复</Button>
        <Button type='primary' onClick={test}>测试</Button>
      </>
    )} >
      <p>姓名: {stu.name}</p>
      <p>年纪: {stu.age}</p>
    </SimplePage>
  );
});

Page.displayName = 'Page';

export default Page;
