import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      submitted: false,
      firstName: '',
      lastName: '',
      emailAddress: ''
            
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
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
            <input type = "text" name = "emailAddr" placeholder = "Email Address" onChange = {this.handleChange}></input>
          </label>
          <input type = "submit" value = "Submit"></input>
        </form>
        <ul>
          {this.state.submitted && Object.values(this.state).map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </>
    )
  }
}

export default App;
