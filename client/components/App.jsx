import React from 'react';

export default class App extends React.Component {

  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  getGreeting(user) {
    if (user) {
      return <h1 style={{
          color: '#0F0'
        }}>Hello, {this.formatName(user)}!</h1>;
    }
    return <h1 style={{
        color: '#F00'
      }}>Hello, Stranger.</h1>;
  };

  render() {
    const user = {firstName: 'Peter', lastName: 'Pan'};
    const element = this.getGreeting(user);

    return (<div>
      {element}
    </div>);
  }
}
