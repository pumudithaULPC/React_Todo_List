import React, {Component} from 'react';

 class AddTodoItem extends Component{
    state={
        title:''
    }

    onSubmit=(e)=> {
        e.preventDefault();
        this.props.addtodoitem(this.state.title);
        this.setState({title:''});
    }

    insetringTodo=(e)=> this.setState({[e.target.name] : e.target.value});

   
    render(){
    
        return(
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
            <input
            type="text"
            name="title"
            style={{ flex:10}}
            placeholder="Add Todo....."
            value={this.state.title}
            onChange={this.insetringTodo}

            />
            <input
            type="submit"
            value="Add"
            className="btn-addtodoitem"
            style={{flex:'1'}}
            />
            </form>
        )
    }
}

export default AddTodoItem;