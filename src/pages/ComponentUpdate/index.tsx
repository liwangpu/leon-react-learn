import React, { memo, useMemo, useState } from 'react';
import styles from './index.module.less';
import { faker } from '@faker-js/faker';
import produce from 'immer';

interface ProfileType {
  name: string;
  age: number;
}

interface AwardsType {
  type: string;
  count: number;
}

interface ComponentUpdateState {
  profile: ProfileType;
  awards: AwardsType;
}


function Profile(props: { profile: ProfileType }): JSX.Element {
  console.log(`Profile--render`);
  return (
    <div className="profile">
      <h3>用户信息</h3>
      <p>姓名:{props.profile.name} 年纪:{props.profile.age}</p>
    </div>
  );
}

function Awards(props: { awards: AwardsType }): JSX.Element {
  console.log(`Awards--render`);
  return (
    <div className="awards">
      <h3>奖项信息</h3>
      <p>类型:{props.awards.type} 次数:{props.awards.count}</p>
    </div>
  );
}

const MemoProfile = memo(Profile);
const MemoAwards = memo(Awards);

export default class ComponentUpdate extends React.Component<any, ComponentUpdateState>{

  constructor(props: any) {
    super(props);
    this.state = {
      profile: { name: 'Leon', age: 18 },
      awards: { type: '奖学金', count: 6 }
    };
  }

  updateProfileNameByMethod1(): void {
    this.setState(pre => {
      pre.profile.age++;
      return {
        profile: { ...pre.profile },
        awards: pre.awards
      };
    });
  }

  updateProfileNameByMethod2(): void {
    this.setState(pre => {
      pre.profile.age++;
      return { ...pre };
    });
  }

  updateProfileNameByMethod3(): void {
    this.setState(produce(this.state, draft => {
      draft.profile.age++;
    }));
  }

  render(): JSX.Element {
    console.log(`ComponentUpdate--render`,);
    return (
      <div className={styles['component-update']}>
        <div className={styles['header']}>
          <button onClick={() => this.updateProfileNameByMethod1()}>修改用户姓名--方法1</button>
          <button onClick={() => this.updateProfileNameByMethod2()}>修改用户姓名--方法2</button>
          <button onClick={() => this.updateProfileNameByMethod3()}>修改用户姓名--方法3</button>
        </div>
        <div className={styles['content']}>
          <MemoProfile profile={this.state.profile} />
          <MemoAwards awards={this.state.awards} />
        </div>
      </div>
    );
  }
}

