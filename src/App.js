import React, { useState, useEffect } from 'react';
import './App.css';
import UserCard from './UserCard/UserCard';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:8080/mock-response-200.json');
      const json = await response.json();

      const users = json.data?.users ?? [];
      setUsers(users);
    };

    fetchUsers();
  }, []);

  return (
    <div className="App">
      {users.map((user, idx) => <UserCard key={idx} user={user}></UserCard>)}
    </div>
  );
}

export default App;
