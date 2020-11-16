import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const flag = true;
const num = 15;
const str = 'Переменная';
const result = true;

class App extends Component {
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style = {{
        	fontSize: 15
        }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style = {{
        	color: 'red',
        	fontSize: 10 + 5
        }}> 
        Первое приложение на React</p>
        <p style = {{
        	fontSize: 15
        }}>
        { str }
        { undefined }
        { null }
        { false }
        </p>
        <p>
        { num }
        </p>
        <p>
        { 20 + 30 }
        </p>
        <p>
        {flag && 'Flag is true'}
        </p>
        <p>
        {result ? 'Result is false' : 'Result is true'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}

export default App;
