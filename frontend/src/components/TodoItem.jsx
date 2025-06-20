const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <span
        onClick={() => toggleTodo(todo._id)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer'
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo._id)}>❌</button>
    </li>
  );
};

export default TodoItem;
