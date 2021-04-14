import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Below is to convert button into link by just adding href */}
        {/* <Button href="#" variant="contained" color="default"> */}
        <Button href="#" variant="contained" color="default">
          Hello World
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
