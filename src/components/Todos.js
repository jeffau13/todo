import React, { Component } from 'react';
import Todoitem from './Todoitem';

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => <Todoitem todo={todo} key={todo.id} />);
  }
}

export default Todos;

//this is
