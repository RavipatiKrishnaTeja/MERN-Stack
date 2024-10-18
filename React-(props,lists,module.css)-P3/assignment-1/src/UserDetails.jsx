import React, { useState } from 'react';
import styles from './UserDetails.module.css';

const UserDetails = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className={styles.userCard}>
      <div className={styles.profileSection}>
        <img src={user.profilePicture} alt="Profile" className={styles.profilePicture} />
        <div>
          <h2>{user.firstName} {user.lastName}</h2>
          <p>{user.location}</p>
        </div>
      </div>
      <div className={styles.statsSection}>
        <div>
          <strong>{user.karma}</strong>
          <p>Karma</p>
        </div>
        <div>
          <strong>{user.followers}</strong>
          <p>Followers</p>
        </div>
        <div>
          <strong>{user.posts}</strong>
          <p>Posts</p>
        </div>
      </div>
      <button
        className={`${styles.followButton} ${isFollowing ? styles.following : ''}`}
        onClick={handleFollowClick}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

export default UserDetails;
