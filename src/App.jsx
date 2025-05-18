import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const API = import.meta.env.VITE_API_URL;

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get(`${API}/users`);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Management</h1>
      <UserForm onUserAdded={fetchUsers} />
      <UserList users={users} onUserChanged={fetchUsers} />
    </div>
  );
}

export default App;
