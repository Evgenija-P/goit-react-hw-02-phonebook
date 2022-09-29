import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import { AppWrapper } from './App.styled';

// const id = nanoid(5);

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  // handleChange = e => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const { contacts, name, password } = this.state;
  //   this.props.onSubmit({ ...this.state });
  //   this.reset();
  // };

  // reset = () => {
  //   this.setState({ ...state });
  // };

  render() {
    return (
      <AppWrapper>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </AppWrapper>
    );
  }
}
