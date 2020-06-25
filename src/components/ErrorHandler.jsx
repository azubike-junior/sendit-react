import React, { Component } from 'react';
import { Notifier } from '@airbrake/browser';

class ErrorHandler extends Component {
  state = {
    errorOccurred: false,
    airbrake: new Notifier({
      projectId: 1,
      projectKey: 'FIXME',
    }),
  };

  componentDidCatch = (error, info) => {
    this.setState({ errorOccurred: true });
    this.state.airbrake.notify({
      error: error,
      params: { info: info },
    });
  };

  render() {
      console.log('=======errorhandler')
    return this.state.errorOccurred ? <h1>Something Went Wrong</h1> : this.props.children;
  }
}

export default ErrorHandler;
