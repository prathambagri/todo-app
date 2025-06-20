import { useState } from 'react';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  // Local state for editing
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // 📝 Start editing a todo
  const startEditing = (todo) => {
    setEditingId(todo._id);
    setEditText(todo.text);
  };

  // 💾 Save edited text
  const saveEdit = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: editText }),
      });

      const updated = await res.json();

      const updatedTodos = todos.map(todo =>
        todo._id === id ? updated : todo
      );

      // You could use a prop function to update todos here instead
      setEditingId(null);
      setEditText('');
      window.location.reload(); // temporary reload to reflect change
    } catch (err) {
      console.error('Error updating todo:', err);
    }
  };

  // ✅ Render the list
  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <li
          key={todo._id}
          className="flex justify-between items-center p-3 bg-gray-300 border rounded-md shadow-sm"
        >
          {editingId === todo._id ? (
            <input
              className="flex-1 mr-2 px-2 py-1 border rounded"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            <span
              onClick={() => toggleTodo(todo._id)}
              className={`flex-1 cursor-pointer ${
                todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
              }`}
            >
              {todo.text}
            </span>
          )}

          {editingId === todo._id ? (
            <button
              onClick={() => saveEdit(todo._id)}
              className="ml-2 text-green-600 hover:text-green-800"
            >
              💾
            </button>
          ) : (
            <button
              onClick={() => startEditing(todo)}
              className="ml-2 text-blue-600 hover:text-blue-800"
            >
              ✏️
            </button>
          )}

          <button
            onClick={() => deleteTodo(todo._id)}
            className="ml-2 text-red-500 hover:text-red-700"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
