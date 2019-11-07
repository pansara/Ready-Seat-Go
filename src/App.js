import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Appa = styled.div`
text-align: center;
`;

const AppLogo = styled.img`
height: 40vmin;`;

function App() {
  return (
    <Appa className="App">
      <header className="App-header">
        <AppLogo src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </Appa>
  );
}

export default App;
