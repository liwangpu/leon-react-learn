import React, { useCallback } from 'react';
import styles from './index.module.less';

const pref = 'card';

type RefLearnState = {

}

export default class RefLearn extends React.Component<RefLearnState> {

  constructor(props: RefLearnState) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className={styles[pref]}>
        <div className="header">
          卡片
        </div>
      </div>
    );
  }
}
