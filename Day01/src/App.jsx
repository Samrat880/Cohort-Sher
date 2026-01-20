import React from 'react'
import Card from './components/Card'

function App() {
  const users = [
    { name: "Samrat", age: 19 },
    { name: "Aman", age: 23 },
    { name: "Rohit", age: 22 },
    { name: "Ankit", age: 21 }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="flex flex-wrap justify-center items-center gap-6">
        {users.map((user, index) => (
          <Card key={index} User={user.name} age={user.age} />
        ))}
      </div>
    </div>
  );
}

export default App