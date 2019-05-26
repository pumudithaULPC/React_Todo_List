import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
    getStyle = () => {
       return{
           background: 'rgb(153, 255, 255)',
           padding: '10px',
           borderBottom: '1px #ccc dotted',
           textDecoration: this.props.todo.IsCompleted ? 'line-through' : 'none'
           
       }
    }
  

  render() {
 const { id, title}=this.props.todo;
    return (
        <div style={this.getStyle()}>
        
           <p>
               <input type="checkbox" onChange={this.props.markAsDone.bind(this, id)}/>
           {" "+ title+" " }
          <button onClick={this.props.delTodoItem.bind(this, id)} style={delbtn}>Delete</button>
           </p>
        </div>
    ) 
}
}
TodoItem.propTypes={
    todo: PropTypes.object.isRequired
}

const delbtn= {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
   float:'right',
   cursor: 'pointer',
   borderRadius: '50%'
}
export default TodoItem;
