import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

// import { Button } from './FeedbackOptions.styled';

export const Filter = ({ value, onFilretContacts }) => {
  const filterId = nanoid(3);
  return (
    <label htmlFor={filterId}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onFilretContacts}
        id={filterId}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilretContacts: PropTypes.func.isRequired,
};
