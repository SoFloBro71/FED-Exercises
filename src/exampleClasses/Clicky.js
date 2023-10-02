import React from 'react';

class Clicky extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: 0
    };
    // This binding is necessary to make `this` work in the onclick callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // this.setState({
    // 	clicked: this.state.clicked + 1
    // });
    
    // Above may be easier to understand for beginners,
    // but the below is the correct way to do this as setState is async
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

