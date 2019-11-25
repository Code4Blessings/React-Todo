import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: ""
        }
    }
   handleChange = (event) => {
       this.setState({
           newTodo: event.target.value
       })
   }
   handleSubmit = event => {
       event.preventDefault();
       this.props.addToDo(this.state.newTodo)
       this.setState({
           newTodo: ""
       });
   }
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">Task:
                   <input 
                   type="text" 
                   placeholder="task"
                   value={this.state.newTodo} 
                   onChange={this.handleChange}
                    />
                </label>
                <button type="submit">Submit</button>
           </form>
        );
    }
}



export default TodoForm;
    