import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import Buttons from './components/Buttons'
import Header from './components/Header'

class App extends Component {
  render(){
    return (
      <main className="App">
        <section className='App-header'>
          <Header />
        </section>
        <section className='List'>
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
