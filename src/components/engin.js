import React from 'react';
import {Button} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary : {
        main : '#9D00FF',
      },
    },
});

export default class AiComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <ThemeProvider theme={darkTheme}>
            <div>
                
                <Button 
                    sx={{
                        position : 'absolute',
                        top : 0,
                        left : 0,
                        color : 'white',
                    }}
                    onClick={() => this.props.change('home')} 
                    size="large"
                >
                    ←
                </Button>
                
                <h1>Artificial intelligence</h1>
            </div>
            </ThemeProvider>
        )
    }
}