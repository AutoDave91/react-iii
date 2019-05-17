import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import White_box from './components/White_box'
// import Buttons from './components/Buttons'
import Header from './components/Header'

class App extends Component {
  render(){
    return (
      <main className="App">
        <section className='App-header'>
          <Header />
        </section>
        <section className='List'>
          <White_box />
        </section>
        {/* <section className='Buttons'>
        <h4>Buttons</h4>
          <Buttons />
        </section> */}
      </main>
    );
  }
}

export default App;

// Requirements
// Your project should...

// Use at least 3 different components,
// including at least 1 that holds and updates
// state. Allow users to navigate through all
// the user information from the array in data.js
// using the < Previous and Next > buttons.
// Include special handling for those buttons
// for the first and last users in the array
// to avoid errors. Display where in the array
// the current user is located (ex. 1/25)
// Match the layout and styling of the mockup
// as closely as possible.

// Black Diamond
// After the < Previous and Next > buttons
// are functional, start working on Delete.
// After the Delete button is functional,
// start working on New. This will require
// a form for users to input new information.
// Focus on the functionality more than the
// styling. After the New button is functional,
// start working on Edit. This will also
// require a form for users to input updated
// information. Focus on the functionality more
// than the styling.