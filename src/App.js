import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <h1>{ `${this.props.values.hello} ${this.props.values.world}!` }</h1>
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
