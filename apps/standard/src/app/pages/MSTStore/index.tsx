import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { Instance, types } from 'mobx-state-tree';
import React from 'react';
import styles from './index.module.less';
import { faker } from '@faker-js/faker';
import { connectReduxDevtools } from 'mst-middlewares';
import { SimplePage } from '@react-learn/shared';

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
      console.log(`generate nick name!`,);
      return `Mr. ${self.name}`;
    }
  }))
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


// hostingStore(stu);



// console.log(`stu name:`,stu.nickName);
// console.log(`stu name:`,stu.nickName);
// console.log(`stu name:`,stu.nickName);


const Page: React.FC = observer(() => {

  const test = () => {
    stu.setName(faker.name.fullName());
  };

  return (
    // <div className={styles['page']}>

    //   <div className={styles['page__header']}>
    //     <Button onClick={test}>测试</Button>
    //   </div>

    //   <div className={styles['page__content']}>

    //     <p>姓名: {stu.name}</p>

    //   </div>

    // </div>

    <SimplePage header={(
      <>
        <Button onClick={test}>测试</Button>
      </>
    )} >


      {/* <SimpleComponent />
      <SimpleComponent />
      <SimpleComponent /> */}
      {/* <p>姓名: {stu.nickName}</p>
      <p>姓名: {stu.nickName}</p> */}
    </SimplePage>
  );
});

Page.displayName = 'Page';

export default Page;

const SimpleComponent: React.FC = observer(props => {

  return (
    <div>
      {stu.nickName}
    </div>
  );
});

SimpleComponent.displayName = 'SimpleComponent';

