import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Form } from './ContactForm.styled';

export class ContactForm extends Component {
  id = nanoid(5);
  render() {
    return (
      <>
        <Form>
          <label htmlFor={this.id}>Name</label>
          <input
            type="text"
            name="name"
            id={this.id}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor={this.id}>Number</label>
          <input
            type="tel"
            name="number"
            id={this.id}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add Contact</button>
        </Form>
      </>
    );
  }
}
