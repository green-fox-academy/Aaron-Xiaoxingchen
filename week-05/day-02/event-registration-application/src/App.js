import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      submitted: false,
      info: {
        firstName: '',
        lastName: '',
        emailAddress: ''
      }     
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const inputName = event.target.name;
    const value = event.target.value;
    this.setState((prevState) => ({
      info: {
        ...prevState.info,
        [inputName]: value,
      },
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({  
      submitted: true,
    })
  }

  render(){
    return (
      <>
        <form onSubmit = {this.handleSubmit}>
          <label>
            First Name:
            <input type = "text" name = "firstName" placeholder = "First Name" onChange={this.handleChange}></input>
          </label>
          <label>
            Last Name:
            <input type = "text" name = "lastName" placeholder = "Last Name" onChange={this.handleChange}></input>
          </label>
          <label>
            Email Address:
            <input type = "text" name = "emailAddress" placeholder = "Email Address" onChange = {this.handleChange}></input>
          </label>
          <input type = "submit" value = "Submit"></input>
        </form>
        <ul>
          {this.state.submitted && Object.keys(this.state.info).map((key) => <li data-key={key} key={key}>{this.state.info[key]}</li>)}
        </ul>
      </>
    )
  }
}

export default App;
