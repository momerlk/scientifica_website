import './App.css';
import React from "react"
import {Button} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary : {
      main : "#9D00FF",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary : {
      main : "#9D00FF",
    },
  },
})

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dark : true,
    };
  }

  toggleDarkMode(){
    this.setState({dark : true});
  }
  toggleLightMode(){
    this.setState({dark : false})
  }

  render(){
    return (
      <ThemeProvider theme={this.state.dark ? darkTheme : lightTheme}>
        <CssBaseline />
        <main>
          <div className='App'>
            <h1>Getting Started</h1>
            <p>This is a paragraph and this is what it will feel like to read an article</p>
            <Button onClick={() => {
              this.toggleLightMode();
            }} variant="contained" sx={{marginRight : 3}}>Light</Button>
            <Button onClick={() => {
              this.toggleDarkMode();
            }} variant="contained">Dark</Button>
          </div>
        </main>
      </ThemeProvider> 
    )
  }
}



export default App;
