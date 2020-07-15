import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Todolist extends PureComponent {
  render() {
    const todoList = [
      { taskName: 'Working', finished: false },
      { taskName: 'Studying', finished: true },
    ];
    return (
      <div>
        {todoList.map((todo) => (
          <div key={todo.taskName}>{todo.taskName}</div>
        ))}
      </div>
    );
  }
}

Todolist.propTypes = {};

export default Todolist;
