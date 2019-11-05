import React from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {acornNum:0};
  }

  componentDidMount(){
    window.addEventListener('keyup', this.keyHandler.bind(this));
  }
  keyHandler(event){
    if(event.keyCode === 38){
      this.handleIncrement();
    }else if(event.keyCode === 40){
      this.handleDecrease();
    }
  }

  handleIncrement(){
    const {acornNum} = this.state;
    this.setState({
      acornNum: acornNum+1,
    });
  }
  handleDecrease(){
    const {acornNum} = this.state;
    if(acornNum <= 0){
      return;
    }
    this.setState({
      acornNum: acornNum-1,
    });
  }
  render(){
    const {acornNum} = this.state;
    return(
      <div className = "APp">
        <input type="submit" value="Buy one" onClick={this.handleIncrement.bind(this)}/>
        <p>{acornNum}</p>
        <input type="submit" value="Eat one" onClick={this.handleDecrease.bind(this)}/>
      </div>
    );
  }
}
export default App;

