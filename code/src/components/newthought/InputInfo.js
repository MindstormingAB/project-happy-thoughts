import React from 'react';

import heartIcon from '../../assets/heart-icon.png';

const InputInfo = ({ newThought }) => {
  return (
    <div className='input-info'>
      <button
        aria-label='Click here to send your happy thought'
        className='send-button'
        disabled={newThought.length < 6 || newThought.length > 140 ? true : false}
      >
        <img className='heart left' src={heartIcon} alt='Pink heart' />
        Send Happy Thought
        <img className='heart right' src={heartIcon} alt='Pink heart' />
      </button>
      <p tabIndex='0' className='length' aria-describedby='maxLength'>
        {newThought.length}
        <span aria-hidden>/140</span>
        <span className='hidden' id='maxLength'>out of 140</span>
      </p>
    </div>
  );
};

export default InputInfo;