import React, { useState } from 'react';
import { connect } from "react-redux";
import { editUserAction } from '../actions/userActions';

class EditContactForm extends React.Component {
  constructor(props){
    super(props)
    //autofill the edit form with the info saved already
  this.state = {
    name: this.props.user.name,
    phone: this.props.user.phone,
    location: this.props.user.location,
  };
    
  }

  handleOnChange = (event) => {
    
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

 
  handleSubmit = () => {
    let user = { ...this.state, id: this.props.user.id }
    this.props.editUser(this.props.user.id, user);
    this.props.hideModal();
  }

  render(){
  return (
    <div>
      <form>
        <div>
          <label>NAME</label><br></br>
          <input
            type="text"
            name="name"
            value={this.state.name} 
            onChange={this.handleOnChange} 
          /><br></br>
        </div> 

        <div>
          <label>PHONE NUMBER</label><br></br>
          <input
            type="tel"
            name="phone"
            value={this.state.phone}
            onChange={this.handleOnChange} 
          /><br></br>
        </div>

        <div>
          <label>LOCATION</label><br></br>
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleOnChange} 
          /><br></br>
        </div>


        <div>
          <br></br>
          <button type="button" onClick={this.handleSubmit}>
            Update
          </button>
        </div>
      </form>
    </div>
  )
  }
}

var mapDispatchToProps = {
  editUser : editUserAction
}

export default connect(null, mapDispatchToProps)(EditContactForm);