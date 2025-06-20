// src/App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  // Fetch todos
  useEffect(() => {
    axios.get('http://localhost:3000/api/todos')
      .then(res => setTodos(res.data))
      .catch(err => console.error(err));
  }, []);

  // Add new task
  const addTodo = async (text) => {
    const res = await axios.post('http://localhost:3000/api/todos', { text });
    setTodos([...todos, res.data]);
  };

  // Toggle complete
  const toggleTodo = async (id) => {
    const res = await axios.put(`http://localhost:3000/api/todos/${id}`);
    setTodos(todos.map(todo => todo._id === id ? res.data : todo));
  };

  // Delete task
  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:3000/api/todos/${id}`);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-600 flex items-center justify-center p-4">
  <div className="w-full max-w-md bg-gray-200 rounded-xl shadow-lg p-6">
    <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">📝 My Todo List</h1>
    <TodoForm addTodo={addTodo} />
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  </div>
</div>

  );
};

export default App;
