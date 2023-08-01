import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { Instance, types } from 'mobx-state-tree';
import React from 'react';
import styles from './index.module.less';
import { faker } from '@faker-js/faker';
import { connectReduxDevtools } from 'mst-middlewares';

const hostingStore = (store: any) => {
  connectReduxDevtools(require("remotedev"), store);
};

const StudentModel = types.model({
  id: types.string,
  name: types.string,
  age: types.number,
})
  .actions(self => ({
    setName(name: string) {
      self.name = name;
    }
  }));

type Student = Instance<typeof StudentModel>;

const stu = StudentModel.create({
  id: 'a',
  name: '毛毛',
  age: 12,
});


hostingStore(stu);

const Page: React.FC = observer(() => {

  const test = () => {
    stu.setName(faker.name.findName());
  };

  return (
    <div className={styles['page']}>

      <div className={styles['page__header']}>
        <Button onClick={test}>测试</Button>
      </div>

      <div className={styles['page__content']}>

        <p>姓名: {stu.name}</p>

      </div>

    </div>
  );
});

Page.displayName = 'Page';

export default Page;

