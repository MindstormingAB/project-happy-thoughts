import React from 'react';

import heartIcon from '../../assets/heart-icon.png';

const Likes = ({ id, likes, onLiked }) => {
  const LIKE_URL = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`;

  const handleClick = () => {
    fetch(LIKE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '',
    }).then(() => onLiked(id));
  };

  return (
    <div className='likes'>
      <button
        aria-label='Click here to like this thought'
        onClick={handleClick}
        className={`like-button ${likes > 0 ? 'liked' : ''}`}
      >
        <img className='heart' src={heartIcon} alt='Pink heart' />
      </button>
      <p tabIndex='0' aria-describedby='likes'>
        <span aria-hidden>x </span>
        {likes}
        <span className='hidden' id='likes'>likes</span>
      </p>
    </div>
  )
}

export default Likes;