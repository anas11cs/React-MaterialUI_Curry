import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox  from '@material-ui/core/Checkbox';
import FormControlLabel  from '@material-ui/core/FormControlLabel';
import TextField  from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg,#FE6B8B,#FF8E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color:'white',
    padding: '5px 30px'
  }
})

function ButtonStytled(){
  const classes = useStyles();
  return <Button className={classes.root}>Styled Button</Button>
}

function CheckBoxExample(){
  const [checked, setChecked] = React.useState(true)
  return(
    <FormControlLabel
    control={
      <Checkbox
        checked={checked}
        icon={<DeleteIcon/>}
        checkedIcon={<SaveIcon/>}
        onChange={(e)=>setChecked(e.target.checked)}
        inputProps={{
          'aria-label':'seconday checkbox'
        }}
      />}
      label="Testing Checkbox"
    />
  )
}

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
        <ButtonStytled/>
        <TextField
        variant="filled"
        color="secondary"
        //type="date"
        //type="time"
        type="email"
        placeholder="emailxyz@email.com"
        //label="Time Text"
        />
        <CheckBoxExample/>
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
