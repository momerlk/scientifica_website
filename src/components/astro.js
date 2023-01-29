import React from "react";
import {Button } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary : {
        main : '#9D00FF',
      },
    },
});

export default class Astro extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ThemeProvider theme={darkTheme}>
            <div>
                <h1>Astronomy</h1>
                <Button 
                    variant="contained"
                    onClick={() => this.props.change('home')} 
                >Back</Button> 
            </div>
            </ThemeProvider>
        )
    }
}