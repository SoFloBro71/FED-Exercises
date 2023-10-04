import React from 'react';

class Clicky extends React.Component {
<<<<<<< HEAD

=======
>>>>>>> 34f0f4d35054b9a556e1ca791cea9277383b69aa
  constructor() {
    super();
    this.state = {
      clicked: 0
    };
<<<<<<< HEAD
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

=======
    // This binding is necessary to make `this` work in the onclick callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // this.setState({
    // 	clicked: this.state.clicked + 1
    // });
    
    // Above may be easier to understand for beginners,
    // but the below is the correct way to do this as setState is async
>>>>>>> 34f0f4d35054b9a556e1ca791cea9277383b69aa
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

<<<<<<< HEAD
export default Clicky;
=======
export default Clicky;

>>>>>>> 34f0f4d35054b9a556e1ca791cea9277383b69aa
