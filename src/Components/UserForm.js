import React, {useState} from 'react';
import './UserForm.css'
import { connect } from 'react-redux';
import {addUser, addUserAction} from '../actions/userActions';


class UserForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        name: "",
        phone: "",
        location: "",
    };
}

  handleOnChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = () => {
    let userId = 10000 + Math.random() * 10000000;
    let user = {...this.state, id:userId};
    this.props.addNewUser(user);
    this.setState({
      name : "",
      phone : "",
      location : "",
  })
  }
  
  render(){
  return (
    <div className="wrapper">
      <form>
        <h1>Contact Form</h1>
        <fieldset>
          <br /><label className="check">NAME</label><br />
          <input type="text" id="textboxid" name="name" value={this.state.name} onChange={this.handleOnChange}></input>
        </fieldset> 
        
        <div>
          <fieldset>
          <br /><label className="check">PHONE NUMBER</label><br />
          <input type="tel" id="textboxid" name="phone"  value={this.state.phone} onChange={this.handleOnChange}></input>
          </fieldset>
        </div> 

       

        <div>
          <fieldset>
          <br /><label className="check">LOCATION</label><br />
          <input type="text" id="textboxid" name="location" value={this.state.location} onChange={this.handleOnChange}></input>
          </fieldset>
        </div> 

        <div>
          <br /><button type="button" onClick={this.handleSubmit}> ADD CONTACT</button><br />
        </div>
      </form>
    </div>
  );
  }
}

const mapDispatchToProps = {
  addNewUser : addUserAction
}

export default  connect(null,mapDispatchToProps)(UserForm);