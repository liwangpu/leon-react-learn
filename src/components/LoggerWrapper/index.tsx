
import React from 'react';

const componentName = 'logger wrapper';

function withLogger<T>(WrappedComponent: React.ComponentType<T>): React.ComponentType<T> {

  return class extends React.Component<T> {

    constructor(props: any) {
      super(props);
      console.log(`${componentName}--ctor`);
    }

    render(): React.ReactNode {
      console.log(`${componentName}--render`);
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
};

export default withLogger;