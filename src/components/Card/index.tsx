import React, { useCallback } from 'react';
import styles from './index.module.less';

type RefLearnProp = {

}

export default class RefLearn extends React.Component<RefLearnProp> {

  constructor(props: RefLearnProp) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className={styles['card']}>
        <div className="header">
          卡片
        </div>
      </div>
    );
  }
}
