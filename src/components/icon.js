import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import TouchIcon from '@material-ui/icons/TouchApp';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

const styles = theme => ({
    fab: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    
    },
    fab2: {
        //display: 'none',
        margin: 0,
        top: 'auto',
        right: 80,
        bottom: 80,
        left: 'auto',
        position: 'fixed',
        transition: '0.5s',    
    },
    fab3: {
        //display: 'none',
        margin: 0,
        top: 'auto',
        right: 100,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
        transition: '0.5s',    
    },
});

class Icon extends Component{
    constructor(props){
        super(props);
        this.state={
            show:true,
        }
        this.handleShow= this.handleShow.bind(this)   
    }
    handleShow(){
        console.log(this.state.show)
        this.setState({show:!this.state.show})
    }
    render(){
        const { classes } = this.props;
        return(
            <div>
                    <Button variant="fab" color="primary" className={classes.fab} >
                        <TouchIcon />
                    </Button>
                    {
                        this.state.show && (
                            <div>
                                 
                            </div>    
                        )
                    }
                   
            </div>
        )
    }
}
export default withStyles(styles)(Icon)