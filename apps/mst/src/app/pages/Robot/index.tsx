import React from 'react';
import styles from './index.module.less';
import { memo, useCallback, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { values, makeAutoObservable, observable } from 'mobx';
import { faker } from '@faker-js/faker';
import { types } from 'mobx-state-tree';

class Robot {

  count = 0;
  title = 'default';

  constructor() {
    makeAutoObservable(this, {
      count: observable,
      title: false
    });
  }

  increase() {
    this.count++;
  }

  setTitle(title: string) {
    console.log(`title:`, title);
    this.title = title;
  }
}

const User = types.model({
  name: types.maybeNull(types.string)
})
  .volatile(self => ({
    age: 12
  }))
  .actions(self => ({
    changeName: (name: string) => {
      self.name = name;
    },
    changeAge: (age: number) => {
      self.age = age;
    }
  }));

const RobotPage = memo(observer(() => {

  const robot = useMemo(() => new Robot(), []);
  const user = useMemo(() => User.create({ name: 'robot' }), []);

  const increase = () => {
    robot.increase();
  };

  const setTitle = () => {
    robot.setTitle(faker.name.fullName());
  };

  const changeName = () => {
    user.changeName(faker.name.fullName());
  };

  const changeAge = () => {
    user.changeAge(faker.datatype.number({ min: 2, max: 100 }));
  };

  return (
    <div className={styles['robot']}>
      <p>Count: {robot.count}</p>
      <p>Title: {robot.title}</p>
      <button onClick={increase}>修改Count</button>
      <button onClick={setTitle}>修改Title</button>

      <br />
      <br />
      <br />

      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={changeName}>修改Name</button>
      <button onClick={changeAge}>修改Age</button>


    </div>
  );
}));

export default RobotPage;

