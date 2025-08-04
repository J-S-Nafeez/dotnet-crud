
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Todo.css';

const API_URL = "http://localhost:5081/api/todo";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [editMode, setEditMode] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');

  const fetchTodos = async () => {
    const res = await axios.get(API_URL);
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!title.trim()) return;
    await axios.post(API_URL, { title });
    setTitle('');
    fetchTodos();
  };

  const updateTodo = async (id) => {
    if (!editedTitle.trim()) return;
    await axios.put(`${API_URL}/${id}`, { id, title: editedTitle });
    setEditMode(null);
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="todo-container">
      <h2 className="todo-title">Todo List</h2>
      <div className="todo-input-wrapper">
        <input
          value={title}
          placeholder="New todo"
          onChange={(e) => setTitle(e.target.value)}
          className="todo-input"
        />
        <button onClick={addTodo} className="add-btn">Add</button>
      </div>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            {editMode === todo.id ? (
              <div className="edit-wrapper">
                <input
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="edit-input"
                />
                <button onClick={() => updateTodo(todo.id)} className="update-btn">Update ✅</button>
                <button onClick={() => setEditMode(null)} className="cancel-btn">Cancel ❌</button>
              </div>
            ) : (
              <div className="view-wrapper">
                <span className="todo-text">{todo.title}</span>
                <button onClick={() => {
                  setEditMode(todo.id);
                  setEditedTitle(todo.title);
                }} className="edit-btn">Edit ✏️</button>
                <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete 🗑️</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
