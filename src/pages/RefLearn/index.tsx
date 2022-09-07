import React from 'react';
import styles from './index.module.less';
import { LayoutOutlined, FormOutlined } from '@ant-design/icons';
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

type RefLearnState = {

}

export default class RefLearn extends React.Component<RefLearnState> {

  constructor(props: RefLearnState) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className={styles.App}>
        ref
      </div>
    );
  }
}