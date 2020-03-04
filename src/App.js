import React, { useState, useEffect } from 'react';
import './App.css';
import SuggestionCard from './UserCard/UserCard';

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
      {users.map((user, idx) => <SuggestionCard key={idx} user={user}></SuggestionCard>)}
    </div>
  );
}

export default App;
