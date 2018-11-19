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
    render(){
        console.log( )
        const { classes , menuToggle } = this.props;
        if ( menuToggle){
            return(
                <div className={classes.Offroot}>
                                    Setting
                </div>
            )
        }else{
            return(
                <div className={classes.Onroot}>
                                    Setting
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        menuToggle : state.MenuToggle
    };
}

export default connect(mapStateToProps, null)(withStyles(styles)(Dashboard))