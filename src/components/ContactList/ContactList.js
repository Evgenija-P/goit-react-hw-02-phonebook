import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { List, Item, Button } from './ContactList.styled';

// import { Button } from './FeedbackOptions.styled';

export const ContactList = ({ contacts, onDeletContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>
            <BsTelephone size={24} color={'blue'} /> {name}: {number}
          </p>
          <Button type="button" onClick={() => onDeletContact(id)}>
            <MdOutlineDeleteForever size={24} color={'blue'} />
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeletContact: PropTypes.func.isRequired,
};
