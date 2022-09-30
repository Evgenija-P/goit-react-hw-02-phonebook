import React from 'react';
import PropTypes from 'prop-types';

// import { Button } from './FeedbackOptions.styled';

export const ContactList = ({ contacts, onDeletContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}, {number}
          </p>
          <button type="button" onClick={() => onDeletContact(id)}>
            Delet
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeletContact: PropTypes.func.isRequired,
};
