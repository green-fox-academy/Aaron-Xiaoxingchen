import React from 'react'

class Travel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstName:'',
      lastName: '',
      age: '',
      gender: '',
      location:'',
      restrictions: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
    const {firstName, lastName, age, gender,location, restrictions} = this.state;
    let output = '';
    output += `First name: ${firstName}\n`;
    output += `Last name: ${lastName}\n`;
    output += `Age: ${age}\n`;
    output += `Gender: ${gender}\n`;
    output += `Location: ${location}\n`;
    output += `Dietary restrictions: ${JSON.stringify(restrictions)}\n`;
    alert(output);
               
  }

  handleChange(event){
    const {type, name, value} = event.target;
    let {restrictions} = this.state;
    if (type === 'checkbox') {
      restrictions = restrictions.filter((item) => item !== name);
      if (event.target.checked) {
        restrictions.push(name);
      }
      this.setState({ restrictions });
    } else {
      this.setState({ [name]: value });
    }
  }
  

  render(){
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
          <h1>Travel</h1>
          <label>
            First Name:
            <input  type = "text" name = "firstName" onChange = {this.handleChange}/>
          </label>
          <label>
            Last Name:
            <input  type = "text" name = "lastName" onChange = {this.handleChange}/>
          </label>
          <label>
            Age:
            <input  type = "text" name = "age" onChange = {this.handleChange}/>
          </label>
          <fieldset>
            Gender:
            <label><input type = "radio" value = "female" name = "gender" onChange = {this.handleChange}/>Female</label>
            <label><input type = "radio" value = "male" name  = "gender" onChange = {this.handleChange}/>Male</label>
          </fieldset>
          <fieldset>
            <select name = "location" onChange = {this.handleChange}> 
              <option value = "Beijing">Beijing</option>
              <option value = "Shanghai">Shanghai</option>
              <option value = "Shenzhen">Shenzhen</option>
            </select>
          </fieldset>
          <fieldset>
            <label><input type = "checkbox" name = "vegetarian" onChange = {this.handleChange}/>vegetarian</label>
            <label><input type = "checkbox" name = "kosher" onChange = {this.handleChange}/>kosher</label>
            <label><input type = "checkbox" name = "lactose" onChange = {this.handleChange}/>lactose</label>
          </fieldset>
          <input type = "submit" value = "Submit"></input>
        </form>
      </div>
    )
  }
}

export default Travel;