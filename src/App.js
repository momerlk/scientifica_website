import './App.css';
import React from "react"
import {Button} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import bgVid from "./assets/stars.mp4"
import TypeWriterEffect from 'react-typewriter-effect';




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

  componentDidMount(){
    
  }

  render(){
    return (
      <ThemeProvider theme={this.state.dark ? darkTheme : lightTheme}>
        <CssBaseline />
        <main>
          <div className='main'>
              <div className="overlay"></div>
              <video src={bgVid} autoPlay loop muted />
              <div className="content">
                  <h1 style={{color : "#9D00FF"}}>Scientifica</h1>
                  <div className='typewriter'>
                    <TypeWriterEffect
                      textStyle={{ fontFamily: 'Josefin sans', color: "white" }}
                      startDelay={100}
                      id="subheading"
                      cursorColor="#9D00FF"
                      text="The Best Science Magazine."
                      typeSpeed={100}
                      scrollArea={document.querySelector('.content')}
                    />
                  </div>
                   
                  <Button 
                    variant="contained" 
                    sx={{marginTop : 2 , fontSize : 'medium' , paddingLeft : 3 , paddingRight : 3 }}
                  >Explore ↓</Button>
              </div>
          </div>
          <div>
            <h1>This is content</h1>
          </div>
        </main>
      </ThemeProvider> 
    )
  }
}



export default App;
