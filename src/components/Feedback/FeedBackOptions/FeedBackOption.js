import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedBackOptionStyle';
function FeedBackOption({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => (
        <FeedbackButton
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackButton>
      ))}
    </>
  );
}

FeedBackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackOption;
