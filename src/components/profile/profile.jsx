import React from 'react';
import css from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => {
  <div className={css.wrapper}>
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li>
          <span className={css.labelStats}>Followers</span>
          <span className={css.quantity}>{stats}</span>
        </li>
        <li>
          <span className={css.labelStats}>Views</span>
          <span className={css.quantity}>{stats}</span>
        </li>
        <li>
          <span className={css.labelStats}>Likes</span>
          <span className={css.quantity}>{stats}</span>
        </li>
      </ul>
    </div>
  </div>;
};

Profile.PropTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    viewes: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
