import React from 'react'

class Registration extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      username: '',
      email: '',
      password: '',
      nameerror: '',
      passworderror: '',
      emailerror: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //const isCheckedbox = event.target.type = "checkbox";
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const isValid = this.validate();
    if(isValid){
    console.log(this.state);
    }
  }

  validate(){
    let nameerror= '';
    let passworderror= '';
    let emailerror= '';
    
    if(!this.state.email.includes('@')){
      emailerror = 'Invalid Email';
    }
    if(!this.state.username){
      nameerror = 'UserName should not be Empty';
    }
    if(this.state.password.length < 8){
      passworderror = 'PassWord should be at least 8 characters'
    }
    if(emailerror || nameerror || passworderror){
      this.setState({emailerror, nameerror, passworderror});
      return false;
    }
    return true;

  }

  render(){
      return(
        <div>
          <form onSubmit = {this.handleSubmit}>
            <div>
              Username:
              <input 
                name = "username" 
                placeholder = "usernmae" 
                value ={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div style = {{fontsize : 12, color : "red"}}>
              {this.state.nameerror}
            </div>
            <div>
              EmailAddress:
              <input               
                name = "email" 
                placeholder = "email" 
                value = {this.state.email}
                onChange={this.handleChange} 
                />
            </div>
            <div style = {{fontsize : 12, color :"red"}}>
              {this.state.emailerror}
            </div>
            <div>
              Password:
              <input              
                name = "password" 
                placeholder = "password" 
                value = {this.state.password}
                onChange = {this.handleChange}></input>
            </div>
            <div style = {{fontsize : 12, color : "red"}}>
              {this.state.passworderror}
            </div>
            <input type = "submit" value = "Submit"></input>
          </form>
        </div>
      )
    }
  }

export default Registration;

