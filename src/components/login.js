
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import RegIcon from '@material-ui/icons/HowToReg';
import PhoneIcon from '@material-ui/icons/LocalPhone'
import { withStyles } from '@material-ui/core';
import axios from 'axios';
import { connect }  from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeAuthUser } from '../actions';
import MMTextField from './utils/mmtext'

const styles = theme => ({
    fab: {
         backgroundColor: theme.palette.background.paper,
         color:"#357a38",
         boxShadow: '0px 0px 0px 0px rgba(255, 105, 100, .7)',
     },
});


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            pass:"",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName=this.handleName.bind(this);
        this.handlePass=this.handlePass.bind(this);
    }
    handleSubmit(){         
        const params = {
            name: this.state.name,
            pass: this.state.pass,
        };
        axios.post('http://localhost:8081/api/v1/login',params,{
            headers: {
                'content-type': 'application/json',
            },
        },       
        ).then(res => {
            // console.log(" ------- ", res.data)
            this.props.changeAuthUser(res.data.authUser)
        })    
    }
    handleName(event){
        this.setState({name: event.target.value});
    }
    handlePass(event){
        this.setState({pass: event.target.value});
    }
    render(){
        const {classes, ...other} = this.props
        return(
           
        <form  noValidate autoComplete="on">
         
        <Card>
            
        <CardContent>
        <MMTextField
          id="name"
          onInput={this.handleName}
          label="Name"
          margin="normal"
          variant="outlined"
          value={this.state.name}
          //inputRef={el => this.state.name = el}
        />
        <TextField
          onChange={this.handlePass}
          type="password"
          id="password"
          label="Password"
          margin="normal"
          variant="outlined"
          value={this.state.pass}
        />            
        </CardContent>
     
        <CardActions>
            <Button size="small" color="primary" fullWidth onClick={this.handleSubmit}>
            Login
            </Button>
        </CardActions>
    </Card>   
    </form>
           

            
        )
    }
}


const mapStateToProps = (state) => {
    return {
      authUser: state.AuthUser,
      
    }
}

function mapDispatchToProps(toggle){    
    return bindActionCreators( {changeAuthUser}, toggle)
 }

 export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Login));