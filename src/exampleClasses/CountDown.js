import React from 'react';

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: this.props.startValue};
  }
  
  componentDidMount() {
    // store the ID of the timer so we can kill it later
    
    this.timerID = setInterval(
      () => this.setState({count: this.state.count - 1}),
      1000
    );
    
    
    // Above may be easier to understand for beginners,
    // but the below is the correct way to do this as setState is async
    // this.timerID = setInterval(
    //   () => this.setState(prevState => ({
    //     count: prevState.count -1
    //   })
    // ), 1000);
  }
  
  componentWillUnmount() {
    // the clock is no longer being displayed so kill the timer
    clearInterval(this.timerID);
  }
  
  render() {
    if(this.state.count > 0){
      return <h2>Time remaining: {this.state.count} seconds.</h2>;
    } else {
      // the clock is no longer being displayed so kill the timer
      clearInterval(this.timerID);
      return <h2>Time up!!</h2>;
    }
  }
}

export default CountDown;