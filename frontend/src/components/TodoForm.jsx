import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
   <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
  <input
    className="flex-1 p-2 border border-black-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Enter task"
    value={text}
    onChange={(e) => setText(e.target.value)}
  />
  <button
    type="submit"
    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
  >
    Add
  </button>
</form>
  );
};

export default TodoForm;
