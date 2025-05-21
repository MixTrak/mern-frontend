import React from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

function UserList({ users, onUserChanged }) {
  const handleDelete = async id => {
    await axios.delete(`${API}/api/users`);
    onUserChanged();
  };

  return (
    <ul>
      {users.map(user => (
        <li key={user._id}>
          {user.name} ({user.email}) - {user.age} years
          <button onClick={() => handleDelete(user._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
