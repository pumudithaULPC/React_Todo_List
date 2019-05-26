import React, { Component } from 'react';

import './App.css';
import{BrowserRouter as Router, Route} from 'react-router-dom';
import './Components/layout/Header.js'
import Todos from './Components/Todos.js';
import Header from './Components/layout/Header.js';
import AddTodoItem from './Components/AddTodoItem.js';
import uuid from 'uuid';
import About from './Components/pages/About';

class App extends Component {
  state={
    todos:[
      {
        id:uuid.v4(),
        title: 'Clean House',
        IsCompleted: false
      },
      {
        id:uuid.v4(),
        title: 'Awurudu Foods',
        IsCompleted: false
      },
      {
        id:uuid.v4(),
        title: 'Visiting Relatives',
        IsCompleted: false
      }
    ]
  }
  delTodoItem=(id)=>{
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  markAsDone=(id)=>{
    this.setState({ todos: this.state.todos.map(todo =>{
      if(todo.id ===id){
        todo.IsCompleted=!todo.IsCompleted
      }
      return todo;
    })});
}
  addtodoitem=(title)=>{
    const newtodoitem={
      id: uuid.v4(),
      title,
      IsCompleted:false
    }
    this.setState({todos:[...this.state.todos, newtodoitem]});
  }
  render() {
    console.log()
    return (
      <Router>
      <div className="App">
      <Header/>
      <Route exact path="/" render={props=>(
        <React.Fragment>
             <AddTodoItem addtodoitem={this.addtodoitem}/>
        <Todos todos={this.state.todos} 
        markAsDone={this.markAsDone} 
        delTodoItem={this.delTodoItem}
        />
        </React.Fragment>
      )} />
      <Route path = "/About" component={About}/>
     
      </div>
      </Router>
    );
  }
}

export default App;
