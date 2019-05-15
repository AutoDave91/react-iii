import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import Buttons from './components/Buttons'

class App extends Component {
  render(){
    return (
      <main className="App">
        <header className="App-header">
          <h1>Home</h1>
        </header>
        <section className='List'>
          <h4>List</h4>
            <List />
        </section>
        <section className='Buttons'>
        <h4>Buttons</h4>
          <Buttons />
        </section>
      </main>
    );
  }
}

export default App;
