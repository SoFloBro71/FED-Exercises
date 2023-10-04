import React from 'react';

class Clicky extends React.Component {

  constructor() {
    super();
    this.state = {
      clicked: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    this.setState(prevState => ({
      clicked: prevState.clicked + 1
    }));
    
  }
  render() {
    return (
      <div>
        <h1>Button has been clicked {this.state.clicked} times.</h1>
        <button type="button" onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default Clicky;