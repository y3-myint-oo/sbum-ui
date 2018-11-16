import React, { Component } from 'react';
import './App.css'
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Welcome from './components/welcome';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {/*<Welcome />*/}
        
        <Home />
       
        
      </MuiThemeProvider>
    )
  }
}

export default App;
