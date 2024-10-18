import React, { useState } from 'react';
import UserDetails from './UserDetails'; //  this path is correct
import './App.css'; // this is for Custom styles for sorting buttons and layout

const App = () => {
  const [users, setUsers] = useState([
    {
      profilePicture: 'https://i.pinimg.com/736x/60/1b/04/601b0478fe7f09eda50d8e478f847e58.jpg',
      firstName: 'Naruto',
      lastName: 'Uzumaki',
      location: 'Hidden Leaf Village, Japan',
      karma: '500',
      followers: '826.2K',
      posts: '52',
      profileColor: '#FF5733', // Adding custom background color for profile pic
    },
    {
      profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbn7ohaA0u5ttRyf3wAQyyqRJCQsELLs1Mgw&s',
      firstName: 'Monkey D ',
      lastName: 'Luffy',
      location: 'East Blue, Japan',
      karma: '300',
      followers: '975.5K',
      posts: '34',
      profileColor: '#33FF57',
    },
    {
      profilePicture: 'https://i0.wp.com/beneaththetangles.com/wp-content/uploads/2016/10/tumblr_ljrzw8nmrg1qdkdwfo1_500.png?resize=480%2C356&ssl=1',
      firstName: 'Son',
      lastName: 'Goku',
      location: 'Southeast Mountains Area of Earth, Japan',
      karma: '750',
      followers: '853.4K',
      posts: '76',
      profileColor: '#3357FF',
    },
    {
      profilePicture: 'https://i.pinimg.com/736x/4b/a0/1e/4ba01e3e7be3dfed7c032f57624032d2.jpg',
      firstName: 'One_Punch',
      lastName: 'Saitama',
      location: 'east-central Honshu, Japan',
      karma: '900',
      followers: '618.7K',
      posts: '89',
      profileColor: '#F1C40F',
    },
    {
      profilePicture: 'https://i.pinimg.com/736x/53/18/ec/5318ec6d5527da88c18307e1e26bd764.jpg',
      firstName: 'Kamado',
      lastName: 'Tanjiro',
      location: 'beach of Coast Forest, Japan',
      karma: '450',
      followers: '789.2K',
      posts: '40',
      profileColor: '#8E44AD',
    },
  ]);

  const sortAscending = () => {
    const sortedUsers = [...users].sort((a, b) =>
      a.firstName.localeCompare(b.firstName)
    );
    setUsers(sortedUsers);
  };

  const sortDescending = () => {
    const sortedUsers = [...users].sort((a, b) =>
      b.firstName.localeCompare(a.firstName)
    );
    setUsers(sortedUsers);
  };

  return (
    <div>
      <div className="sortButtons">
        <button className="sortButton" onClick={sortAscending}>Sort by Ascending</button>
        <button className="sortButton" onClick={sortDescending}>Sort by Descending</button>
      </div>
      {users.map((user, index) => (
        <UserDetails key={index} user={user} />
      ))}
    </div>
  );
};

export default App;
