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

function App(){
  const [dark , setTheme] = React.useState(true);
  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <CssBaseline />
      <main>
        <div className='App'>
          <h1>Getting Started</h1>
          <Button onClick={() => {
            setTheme(false);
          }} variant="contained" sx={{marginRight : 3}}>Light</Button>
          <Button onClick={() => {
            setTheme(true)
          }} variant="contained">Dark</Button>
        </div>
      </main>
    </ThemeProvider>
  )
}

export default App;
