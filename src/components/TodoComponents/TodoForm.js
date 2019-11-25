import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: ""
        }
    }
   
    render() {
        return (
           <form>
                <label htmlFor="task">Task:
                   <input 
                   type="text" 
                   placeholder="task"
                   value={this.state.newTodo} 
                    />
                </label>
                <button type="submit">Submit</button>
           </form>
        );
    }
}



export default TodoForm;
    