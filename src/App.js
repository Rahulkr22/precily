import './App.css';
import './style.css';
import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { db } from './firebase_config';
import firebase from 'firebase';
import TodoListItem from './Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  useEffect(() => {
    getTodos();
  }, []); // blank to run only on first launch

  function getTodos() {
    db.collection('todos').onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  function addTodo(e) {
    e.preventDefault();
    db.collection('todos').add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput('');
  }

  return (
    <div className="App">
      <div>
        <h1
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: '150px',
          }}
        >
          My ToDo List{' '}
        </h1>
        <form>
          <TextField
            id="standard-basic"
            label="Write ToDo..."
            value={todoInput}
            style={{
              width: '90vw',
              maxWidth: '500px',
              marginTop: '24px',
            }}
            onChange={(e) => {
              setTodoInput(e.target.value);
            }}
          />
          <Button
            variant="outlined"
            type="submit"
            onClick={addTodo}
            style={{
              display: 'none',
            }}
          >
            Default
          </Button>
        </form>
        <div>
          {todos.map((todo) => (
            <TodoListItem
              todo={todo.todo}
              inprogress={todo.inprogress}
              id={todo.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
