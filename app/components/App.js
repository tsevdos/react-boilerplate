import React, { Component } from 'react';

class App extends Component {
  sayHello() {
    return `${this.props.values.hello} ${this.props.values.world}`;
  }

  render() {
    return (
      <h1>{this.sayHello()}!</h1>
    );
  }
}

App.propTypes = {
  values: React.PropTypes.object
};

App.defaultProps = {
  values: {
    hello: 'Hello',
    world: 'World'
  }
};

export default App;
