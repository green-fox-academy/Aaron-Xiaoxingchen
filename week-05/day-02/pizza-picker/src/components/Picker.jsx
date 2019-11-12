import React from 'react';

class Picker extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      cut : null,
      comment : "",
      base: "",
      toppings: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const {name, value, type} = event.target;
    if(type === 'textarea'){
      this.setState({comment : value})
    }
    if(type === 'radio'){
      this.setState({cut : value})
    }
    if(type === 'checkbox'){
      let {toppings}  = this.state;
      toppings = toppings.filter(item => item !== name)
      if(event.target.checked){
        toppings.push(name);
      }
      this.setState({toppings})
    }
    if(type === 'select-'){
      this.setState({base : value})
    }
  }
  
  handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
  }

  render(){
    return(
      <>
        <form onSubmit = {this.handleSubmit}>
          <h1>Pizza Picker</h1>
          <fieldset>
            Base:
            <select name= "base" onChange={this.handleChange}>
              <option>Cheese-taste</option>
              <option>Onion-taste</option>
              <option>Tomato-taste</option>
            </select>
          </fieldset>
          <fieldset>
            Toppings:
            <label><input type="checkbox" name="Cheesewithegg" checked = {this.state.toppings.includes('Cheesewithegg')} onChange = {this.handleChange}/>Cheesewithegg</label>
            <label><input type="checkbox" name="Onionwithbeef" checked = {this.state.toppings.includes('Onionwithbeef')} onChange = {this.handleChange}/> Onionwithbeef</label>
            <label><input type="checkbox" name="TomatowithChicken" checked = {this.state.toppings.includes('TomatowithChicken')}onChange = {this.handleChange}/> TomatowithChicken</label>
          </fieldset>
          <fieldset>
          <label>
            Cut:
            <input 
              name = "cut"
              type = "radio"
              checked = {this.state.cut}
              onChange = {this.handleChange}
            /> Yes
            <input 
              name = "cut"
              type = "radio"
              checked = {this.state.cut}
              onChange = {this.handleChange}
            /> No
          </label>
          </fieldset>
          <fieldset>
            <textarea name="comment" onChange = {this.handleChange}></textarea><br/>
          </fieldset>
          <input type= "submit" value = "Submit"></input>
        </form>
      </>
    )
  }
}

export default Picker