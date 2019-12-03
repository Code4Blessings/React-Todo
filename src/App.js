import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

 // you will need a place to store your state in this component.
 // design `App` to be the parent component of your application.
 // this component is going to take care of state, and any change handlers you need to work with your state



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

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(task => !task.completed)
    })
  }
    

 
  render() {
    return (
      <div className="App">
        <div className="header">
           <h2>Welcome To Your Todo App!</h2>
            <TodoForm 
            addToDo={this.addToDo} />
        </div>
        <TodoList 
        todos={this.state.todos} 
        toggleComplete={this.toggleComplete} 
        clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
