import React, { useState } from 'react';
import UserDetails from './UserDetails';
import styles from './App.module.css'; // For styling if needed
import usersData from './users.json'; // Import users data

const App = () => {
  const [users, setUsers] = useState(usersData);
  const [sortOrder, setSortOrder] = useState('asc');

  // Sort function based on first name
  const handleSort = () => {
    const sortedUsers = [...users].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.first_name.localeCompare(b.first_name);
      } else {
        return b.first_name.localeCompare(a.first_name);
      }
    });
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setUsers(sortedUsers);
  };

  return (
    <div className={styles.app}>
      <button onClick={handleSort}>
        Sort by First Name ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
      </button>
      <div className={styles.userList}>
        {users.map((user) => (
          <UserDetails key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default App;
