import React, { Component } from 'react';
import TodoItem from './TodoItems'; 
import PropTypes from 'prop-types';

class Todos extends Component {
     
  render() {
    return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markAsDone={this.props.markAsDone} delTodoItem={this.props.delTodoItem}/>
    ));
  }
}

Todos.propTypes={
    todos: PropTypes.array.isRequired
}
export default Todos;
