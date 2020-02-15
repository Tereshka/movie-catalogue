import React from 'react';
const {Provider, Consumer} = React.createContext();

class MovieContextProvider extends React.Component {
  render() {
    return (
      <Provider value={this.props.value}>
        {this.props.children}
      </Provider>
    );
  }
}

export {MovieContextProvider, Consumer as MovieContextConsumer}
