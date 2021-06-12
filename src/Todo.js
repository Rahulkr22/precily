import React from 'react';
import { ListItem, ListItemText, Button } from '@material-ui/core';
import { db } from './firebase_config';

export default function TodoListItem({ todo, inprogress, id }) {
  function toggleInprogress() {
    db.collection('todos').doc(id).update({
      inprogress: !inprogress,
    });
  }

  function deleteTodo() {
    db.collection('todos').doc(id).delete();
  }
  function updateTodoItem() {
    let data = prompt('Enter Your New Data...');
    db.collection('todos').doc(id).update({
      todo: data,
    });
  }

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? 'In Progress' : 'Completed'}
        ></ListItemText>
      </ListItem>
      <button variant="outlined" onClick={toggleInprogress}>
        {inprogress ? 'Done' : 'Undone'}
      </button>
      <Button
        variant="outlined"
        color="secondary"
        style={{
          marginTop: '22px',
          border: '0.5px solid grey',
          textDecoration: 'capitalize',
          marginLeft: '15px',
        }}
        onClick={deleteTodo}
      >
        Delete
      </Button>
      <Button
        variant="outlined"
        color="primary"
        style={{
          marginTop: '22px',
          border: '0.5px solid grey',
          textDecoration: 'capitalize',
          marginLeft: '20px',
        }}
        onClick={updateTodoItem}
      >
        Update
      </Button>
    </div>
  );
}
