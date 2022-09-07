import React from 'react';
import styles from './index.module.less';
import { LayoutOutlined, FormOutlined } from '@ant-design/icons';
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

type HookLearnState = {

}

export default class HookLearn extends React.Component<HookLearnState> {

  constructor(props: HookLearnState) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className={styles.App}>
        hook
      </div>
    );
  }
}