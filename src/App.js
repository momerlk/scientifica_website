import './App.css';
import React from "react"
import {Button} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import bgVid from "./assets/stars.mp4"
import TypeWriterEffect from 'react-typewriter-effect';
import Lottie from 'react-lottie';




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
      isStopped: false, isPaused: false
    };
    this.ai_ref = React.createRef();
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
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: "https://assets5.lottiefiles.com/packages/lf20_eKikFJ.json",
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <ThemeProvider theme={this.state.dark ? darkTheme : lightTheme}>
        <CssBaseline />
        <main>
          <div className='main'>
              <div className="overlay"></div>
              <video src={bgVid} autoPlay loop muted />
              <div className="content">
                <iframe src="https://embed.lottiefiles.com/animation/86808" className="logo" allowTransparency="true"></iframe>
                  <h1 style={{color : "#9D00FF"}}>Scientifica</h1>
                  <div className='typewriter'>
                    <TypeWriterEffect
                      textStyle={{ fontFamily: 'Josefin sans', color: "white" , textAlign : "center", }}
                      startDelay={700}
                      id="subheading"
                      cursorColor="#9D00FF"
                      text="Science Magazines reimagined."
                      typeSpeed={200}
                      
                      scrollArea={document.querySelector('.content')}
                    />
                  </div>
                   
                  <Button 
                    variant="contained" 
                    sx={{marginTop : 2 , fontSize : 'medium' , paddingLeft : 3 , paddingRight : 3 }}
                    onClick={() => {
                      this.ai_ref.current?.scrollIntoView({behavior : 'smooth'})
                    }}
                  >Explore ↓</Button>
              </div>
          </div>
          <div className='ai' ref={this.ai_ref}>
            
            {/* <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/> */}
              <iframe src="https://embed.lottiefiles.com/animation/9944" className='lottie'   
              ></iframe>
              <h1>AI</h1>
          </div>
        </main>
      </ThemeProvider> 
    )
  }
}



export default App;
