import React, { useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

function UserForm({ onUserAdded }) {
  const [form, setForm] = useState({ name: '', email: '', age: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post(`${API}/api/users/${id}`);
    setForm({ name: '', email: '', age: '' });
    onUserAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} required />
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;
