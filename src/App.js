import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

 // you will need a place to store your state in this component.
 // design `App` to be the parent component of your application.
 // this component is going to take care of state, and any change handlers you need to work with your state

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addToDo = (task) => {
    const newToDo = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newToDo]
    })
  }

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };
 
  render() {
    return (
      <div className="App">
        <div className="header">
           <h2>Welcome To Your Todo App!</h2>
            <TodoForm 
            addToDo={this.addToDo} />
        </div>
        {console.log(this.state)}
        <TodoList 
        todos={this.state.todos} 
        toggleComplete={this.toggleComplete} />
      </div>
    );
  }
}

export default App;
