import React, { Component } from 'react';

export default class AddTodo extends Component {
  state = {
    title: ''
  };

  updateTitle = e => {
    this.setState({ [e.target.name]: e.target.value });
    /* 
    setting e.target.name to e.target.value allows for setting
    multiple states as long as the name in the form matches state key
     */
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          placeholder="add new todo item"
          style={{ flex: '10', padding: '5px' }}
          value={this.state.title}
          onChange={this.updateTitle}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}
