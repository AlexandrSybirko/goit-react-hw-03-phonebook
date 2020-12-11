import React, { Component } from 'react';

import s from './ContactForm.module.css'


class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }
  
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.onSubmit(name, number);
    this.reset();
  }  
  
  reset() {
    this.setState({
      name: '',
      number: ''
    })
  } 

  render() {
    return (
      <form
      className={s.form}
        onSubmit={this.handleSubmit}>
        <label
          className={s.label}>
          Name
          <input 
            className ={s.input}
            type="text"
            name="name"
            value={this.state.name}
             placeholder="Go IT"
            onChange={this.handleChange}
            
          />
        </label>
        <label
            className={s.label}     
          >
          Number
          <input
            className ={s.input}
            type="text"
            name="number"
            value={this.state.number}
             placeholder="000-000-000"
            onChange={this.handleChange}
            
          />
        </label>

        <button
          className={s.button}
          type="submit">
          Add contact
        </button>
      </form>
    )
  }
}

export default ContactForm;