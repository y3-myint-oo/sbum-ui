import React, { Component } from 'react';
import './App.css'
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Welcome from './components/welcome';
import Home from './components/home';
import { connect }  from 'react-redux';



class App extends Component {
  render() {
    const { classes , authUser } = this.props;
    if (this.props.authUser !=null ){
      return(
        <MuiThemeProvider theme={theme}>
          <Home />
        </MuiThemeProvider>
      )
    }else{
      return(
      <MuiThemeProvider theme={theme}>
         <Welcome />
      </MuiThemeProvider>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
      authUser : state.AuthUser
  };
}

export default connect(mapStateToProps)(App);
