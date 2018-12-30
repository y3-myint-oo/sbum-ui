import React, { Component } from 'react';
import { withStyles, Divider } from '@material-ui/core';
import { connect }  from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import CircleMenu from './icon';
import StoreBox from './utils/dashStorebox';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
    root: {
        flexGrow: 1,        
    },
    fab: {
         backgroundColor: theme.palette.background.paper,
         color:"#357a38",
         boxShadow: '0px 0px 0px 0px rgba(255, 105, 100, .7)',
    },
    Onroot:{
         marginLeft: theme.spacing.unit*30,
        // backgroundColor:'#fee',
    },
    Offroot:{
        marginLeft: theme.spacing.unit*10,
      //  backgroundColor:'#238412',
    },
    grow: {
        flexGrow: 1,
    },
    toolBar:{
        boxShadow: '0px 0px 10px 0px rgba(76,175,80, .9)',
    },
    storeBox:{
        marginTop: theme.spacing.unit*2,
        padding: theme.spacing.unit * 2,
        boxShadow: '0px 0px 2px 2px rgba(76,175,80, .7)',
    },
    cashBox:{
        marginTop: theme.spacing.unit*2,
        padding: theme.spacing.unit * 2,
        boxShadow: '0px 0px 2px 2px rgba(76,175,80, .7)',
    },
   
});

class Dashboard extends Component{
    
    render(){
        const { classes , menuToggle,authUser } = this.props;
        if ( menuToggle){
            return(
                <div className={classes.Offroot}>
                    <DashboardContent classes={classes} />
                </div>
            )
        }else{
            return(
                <div className={classes.Onroot}>
                    <DashboardContent classes={classes} />
                </div>
            )
        }
    }
}

class DashboardContent extends Component{
    constructor(props){
        super(props);
        this.state={

        }          
    } 
    render(){
        const { classes } =this.props;
 
        return(
            <div className={classes.root}>
                    <AppBar position="sticky" color="default">
                        <Toolbar className={classes.toolBar}>
                        <Typography variant="h6" color="primary">
                            ကျောက်သင်ပုန်း
                        </Typography>
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            dsfdsf
                        </div>    
                        </Toolbar>
                    </AppBar>

                    <CircleMenu />
                    <Grid container>
                        <Grid item md={6}>
                                <Grid container
                                direction="column"
                                justify="center"
                               // alignItems="center"
                                >
                                <Grid item md={8}>
                                    <Paper className={classes.storeBox}>
                                        <Typography variant="subtitle1" gutterBottom align="center" color="primary">
                                        ဂိုထောင် သိုလှောင်မှုအခြေအနေ
                                        </Typography>
                                        <StoreBox />
                                    </Paper>
                                </Grid>
                                <Grid item md={4}>
                                    <Paper className={classes.cashBox}>
                                        <Typography variant="h6" gutterBottom align="center" color="primary">
                                         ယနေ့အတွက် ငွေစာရင်း
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom align="right" color="secondary">
                                            <spam></spam>   ၂၀၀၀၀၀ <spam>ကျပ်</spam>
                                        </Typography>
                                        <Divider light={false}/>
                                        <Typography variant="subtitle1" gutterBottom align="right" color="primary">
                                            <spam></spam>   ၃၀၈၄ <spam>ကျပ်</spam>                                        
                                        </Typography>
                                    </Paper>    
                                </Grid>
                                </Grid>
                        </Grid>
                        <Grid item md={6}>
                        </Grid>
                    </Grid>
            </div>    
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuToggle : state.MenuToggle,
        authUser : state.AuthUser
    };
}

export default connect(mapStateToProps, null)(withStyles(styles)(Dashboard))