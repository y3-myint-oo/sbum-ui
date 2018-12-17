import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { connect }  from 'react-redux';


const styles = theme => ({
    fab: {
         backgroundColor: theme.palette.background.paper,
         color:"#357a38",
         boxShadow: '0px 0px 0px 0px rgba(255, 105, 100, .7)',
     },
     Onroot:{
         marginLeft: theme.spacing.unit*30,
         backgroundColor:'#fee',
     },
     Offroot:{
        marginLeft: theme.spacing.unit*10,
        backgroundColor:'#238412',
     },

});

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={

        }        
       
    } 
    render(){
        const { classes , menuToggle,authUser } = this.props;
        if ( menuToggle){
            return(
                <div className={classes.Offroot}>
                    {authUser.name}
                </div>
            )
        }else{
            return(
                <div className={classes.Onroot}>
                                    Dashboard
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        menuToggle : state.MenuToggle,
        authUser : state.AuthUser
    };
}

export default connect(mapStateToProps, null)(withStyles(styles)(Dashboard))