import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { object } from "prop-types";
import { ReactReduxContext } from 'react-redux';
import { Slice } from '@reduxjs/toolkit';
import { EnhancedStoreExtension } from './store';

export const withReducer = (key, slice: Slice) => WrappedComponent => {
  return class extends React.Component {
    static contextType: React.Context<{ store: EnhancedStoreExtension }> = ReactReduxContext as any;
    constructor(props: any, cxt) {
      super(props);
      console.log(`redux registry`);
      cxt.store.registry(key, slice.reducer);
    }

    componentWillUnmount(): void {
      console.log(`redux unRegistry`);
      // (this.context as any).store.unRegistry(key);
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
}

