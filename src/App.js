import './effects.css';
import React from "react"
import {Button} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import bgVid from "./assets/stars.mp4"
import TypeWriterEffect from 'react-typewriter-effect';


import Home from "./components/home.js"
import Ai from "./components/ai.js"
import Astro from "./components/astro.js"

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

class View {
  constructor(name , component){
    this.name = name;
    this.component = component;
  }
}
class Router {
  constructor(views){
    this.views = new Map();
    for(let i = 0;i < views.length;i++){
      this.views.set(views[i].name , views[i].component);
    }
  }

  render(pname){
    let name = pname;
    if (!(this.views.has(name))){
      name = "home";
    }
    return (
      <div>
        {this.views.get(name)}
      </div>
    )
  }
}

function App(){
  const [cur , setCur] = React.useState(true);
  let router = new Router([
    new View("home" , (<Home change={setCur}/>)),
    new View("ai" , (<Ai change={setCur}/>)),
    new View("astro" , (<Astro change={setCur}/>)),
  ]);
  


  return (
    <div>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
        {router.render(cur)}
      </main>
    </ThemeProvider>
    </div>
  )
}



export default App;
