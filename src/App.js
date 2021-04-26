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
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {orange, green} from '@material-ui/core/colors'
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[400]
    }
  },
  typography:{
    h2:{
      fontSize:36
    },
    subtitle1:{
      marginBottom:2.5
    }
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
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
      <div className="App">
        <header className="App-header">
          <AppBar color="secondary">
            <Toolbar>
                {}
                <IconButton>
                  <MenuIcon />
                </IconButton>
                {}
                <Typography variant="h6">
                  MUI Theming
                </Typography>
                {}
                <Button style={{backgroundColor:"white", marginLeft:10}}>
                  Login
                </Button>
            </Toolbar>
          </AppBar>
          <Typography variant="h2">Welcome to M-UI</Typography>
          <Typography variant="subtitle1">LEARN how to use M-UI</Typography>
          {/* Below is to convert button into link by just adding href */}
          {/* <Button href="#" variant="contained" color="default"> */}
          {/* <Button onClick={()=>alert('Hello')} variant="contained" color="default"> */}
          {/* <Button
          style={{
            fontSize: 24
          }}
          variant="contained" color="default">*/}
          <ButtonStytled/>
          <Grid container  style={{marginBottom:10, justifyContent:"center"}} spacing={2}>
            {/*xs=12 means to contain the complete width of the screen*/}
            <Grid item xs={3} sm={6}>
              <Paper style={{height:75, width:'100%',}} />
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{height:75, width:'100%',}} />
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{height:75, width:'100%',}} />
            </Grid>
            {/* BELOW UTILIZES full space in a row and adjusts accordingly on downgrade/upgrade of screen
              <Grid item xs >
              <Paper style={{height:75, width:'100%',}} />
            </Grid> */}
          </Grid>
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
