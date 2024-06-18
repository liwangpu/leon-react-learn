import { observer } from 'mobx-react-lite';
import React from 'react';
import { action, autorun, makeObservable, observable } from 'mobx';
import styles from './index.module.less';
import { isNil } from 'lodash';

class Student {
  public name: string;
  public age: number;

  public constructor(props: { name: string, age: number }) {
    makeObservable(this, {
      name: observable,
      age: observable,
      update: action,
    });
    const { name, age } = props;
    this.name = name;
    this.age = age;
  }

  public update(props: { name?: string, age?: number }) {
    const { name, age } = props;
    if (!isNil(name)) {
      this.name = name;
    }
    if (!isNil(age)) {
      this.age = age;
    }
  }
}


const s1 = new Student({ name: 'Leon', age: 12 });
console.log(`s1:`, s1);

autorun(() => {
  const name = s1.name;
  const age = s1.age;
  console.log(`我是${name},今年${age}岁了!`);
});

setTimeout(() => {
  s1.update({ name: 'Leon Plus', age: 18 });
}, 1500);

const Page: React.FC = observer(() => {

  return (
    <div className={styles['page']}>

      <div className={styles['page__header']}>

      </div>

      <div className={styles['page__content']}>

      </div>
    </div>
  );
});

Page.displayName = 'Page';

export default Page;

