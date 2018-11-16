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

const styles = theme => ({
    fab: {
         backgroundColor: theme.palette.background.paper,
         color:"#357a38",
         boxShadow: '0px 0px 0px 0px rgba(255, 105, 100, .7)',
     },
});

class Welcome extends Component{
    render(){
        const { classes } = this.props;
        return(
                <div class='welcome'>
                    <div class='login'>
                        <div class='menu'>
                            <Menu style={classes}/>
                        </div>
                        <div class='content'>
                            <div class='slider'>
                                <div class='slide1'></div>
                                <div class='slide2'></div>
                                <div class='slide3'></div>
                            </div>
                            <div class='header'>
                                ဦးမြင့်
                            </div>  
                            <div class='label'>
                                တောင်သူများနင့်အမြဲအတူ
                            </div>    
                        </div>
                        <div class='frame'>
                            <Login />
                        </div>    
                    </div>
                </div>   
           
        )
    }
}

class Login extends Component{
    render(){
        return(
            <form noValidate autoComplete="off">
        <Card>
      
        
        <CardContent>
        <TextField
          id="name"
          label="Name"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="name"
          label="Password"
          margin="normal"
          variant="outlined"
        />
            
        </CardContent>
     
        <CardActions>
            <Button size="small" color="primary" fullWidth>
            Sing In
            </Button>
        </CardActions>
    </Card>   
    </form>
           
            
        )
    }
}

class Menu extends Component{
    render(){
        const { style } = this.props;
        return (
            <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={40}
            style={{ paddingTop: '60%' }}
          >

            <Grid item>
                <Button variant="fab" color="secondary" className={style.fab}> 
                   <RegIcon />
                </Button>
            </Grid>
            <Grid item>
                <Button variant="fab" color="secondary" className={style.fab}>
                    <PhoneIcon />
                </Button>
            </Grid>
          </Grid>
        )
    }
}

export default withStyles(styles)(Welcome)