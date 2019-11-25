import React from 'react';
import Todo from './Todo';
import './Todo.css';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    todo={todo} />
            ))}
             <button>Clear</button>
        </div>
    )
}

export default TodoList;