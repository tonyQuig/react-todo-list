import React from 'react';
import Header from './components/Header';
import MainContent from './MainContent';
import Footer from './components/Footer';
import './styles.css';
import TodoItem from './components/ToDoItem';
import ContactCard from './components/ContactCard';
import Joke from './components/Joke';
import jokesData from './data/jokesData';
import products from './data/productsData';
import Product from './components/Product';
import todosData from './data/todosData'
import Greeting from './components/Greeting';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todoItems: todosData,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState((prevState) => {
      const newState = prevState.todoItems.map((todo) => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
      console.log('New state: ', newState);

      return {
        todoItems: newState
      }

    })
  }

  render() {
    const todos = this.state.todoItems.map(todo => <TodoItem handleChange={this.handleChange} key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />)
    return (
      <div className="todo-list">
        {todos}
      </div>
    )
  }




  // constructor() {
  //   super()
  //   this.state = {
  //     welcomeMessage: 'Hello!',
  //     loggedIn: false
  //   }

  //   this.handleLogin = this.handleLogin.bind(this);
  // }

  // handleLogin(){
  //   this.setState((prevState) => {
  //     return {
  //       loggedIn: !prevState.loggedIn
  //     }
  //   })
  // }

  // render() {
  //   return (
  //     <div>
  //       <h1>{this.state.welcomeMessage} you're {this.state.loggedIn ? 'logged in!' : 'logged out!'}</h1>
  //       <button onClick={this.handleLogin}>
  //         {this.state.loggedIn ? 'Logout' : 'Login'}
  //       </button>
  //     </div>

  //   )
  // }
}

export default App;