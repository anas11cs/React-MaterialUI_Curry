import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Below is to convert button into link by just adding href */}
        {/* <Button href="#" variant="contained" color="default"> */}
        {/* <Button onClick={()=>alert('Hello')} variant="contained" color="default"> */}
        {/* <Button
        style={{
          fontSize: 24
        }}
        variant="contained" color="default">*/}
        <ButtonGroup variant={"contained"} /*color="default"*/>
            <Button
            startIcon={<SaveIcon/>}
            // endIcon={<SaveIcon/>}
            // variant="contained"
            color="primary">
            Save
            </Button>
            <Button
            startIcon={<DeleteIcon/>}
            // endIcon={<SaveIcon/>}
            // variant="contained"
            color="secondary">
            Discard 
            </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
