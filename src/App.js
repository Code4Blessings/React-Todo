import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';

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
      todos: list
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
           <h2>Welcome to your Todo App!</h2>
        </div>
         <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
