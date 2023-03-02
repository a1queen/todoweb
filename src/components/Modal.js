import React from 'react';
import Popup from 'reactjs-popup';
import Form from './Form';
import './Modal.css'

export default (props) => (
  <Popup
    trigger={<button className="button"> Add a new task! </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Add a new Task </div>
        <div className="content">
          {' '}
          <Form url= {props.url} addTask = {props.addTask} />
        </div>
        <div className="actions">
  
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            Save!
          </button>
        </div>
      </div>
    )}
  </Popup>
);