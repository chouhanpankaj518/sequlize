import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [updateId, setUpdateId] = useState('');
  const [deleteId, setDeleteId] = useState('');

  // Fetch users
  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:5700/api/showdata');
    setUsers(response.data);
  };

  // Create user
  const handleCreate = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5700/api/create', formData);
    setFormData({ username: '', email: '' });
    fetchUsers();
  };

  // Update user
  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5700/api/update/${updateId}`, formData);
    setUpdateId('');
    fetchUsers();
  };

  // Delete user
  const handleDelete = async (e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:5700/api/delete/${deleteId}`);
    setDeleteId('');
    fetchUsers();
  };

  return (
    <div>
      <h1>CRUD Operations</h1>

      {/* Create User Form */}
      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <button type="submit">Create User</button>
      </form>

      {/* Update User Form */}
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="User ID to Update"
          value={updateId}
          onChange={(e) => setUpdateId(e.target.value)}
          required
        />
        <button type="submit">Update User</button>
      </form>

      {/* Delete User Form */}
      <form onSubmit={handleDelete}>
        <input
          type="text"
          placeholder="User ID to Delete"
          value={deleteId}
          onChange={(e) => setDeleteId(e.target.value)}
          required
        />
        <button type="submit">Delete User</button>
      </form>

      {/* Display Users */}
      <button onClick={fetchUsers}>Show All Users</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}
