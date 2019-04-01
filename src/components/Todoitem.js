import React, { Component } from 'react';
import PropTypes from 'prop-types';

const itemStyle = {
  backgroundColor: '#f4f4f4'
};
export class Todoitem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}
Todoitem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default Todoitem;
