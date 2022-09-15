import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { object } from "prop-types";
import { ReactReduxContext } from 'react-redux';
import { Slice } from '@reduxjs/toolkit';
import { EnhancedStoreExtension } from './store';

// export const withReducer = (key, slice: Slice) => WrappedComponent => {
//   const Extended = (props) => {
//     const reduxCtx: { store: EnhancedStoreExtension } = useContext(ReactReduxContext) as any;
//     // reduxCtx.store.registry(key, slice.reducer);

//     const ref = useRef(false);
//     if (!ref.current) {
//       ref.current = true;
//       reduxCtx.store.registry(key, slice.reducer);
//       console.log(`ref:`,);
//     }
//     // useLayoutEffect(() => {
//     //   reduxCtx.store.registry(key, slice.reducer);
//     //   console.log(`parent useLayoutEffect`);
//     // }, []);

//     useEffect(() => {
//       // reduxCtx.store.registry(key, slice.reducer);
//       // console.log(`registry`);
//       return () => {
//         reduxCtx.store.unRegistry(key);
//       };
//     }, []);

//     return (
//       <WrappedComponent {...props} />
//     );
//   };

//   Extended.contextTypes = {
//     store: object
//   };
//   return Extended;
// };

export const withReducer = (key, slice: Slice) => WrappedComponent => {
  return class extends React.Component {
    static contextType: React.Context<{ store: EnhancedStoreExtension }> = ReactReduxContext as any;
    constructor(props: any, cxt) {
      super(props);
      cxt.store.registry(key, slice.reducer);
    }

    componentWillUnmount(): void {
      (this.context as any).store.unRegistry(key);
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
}

