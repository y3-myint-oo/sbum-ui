import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { connect }  from 'react-redux';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    form: {
          display: 'flex',
          flexDirection: 'column',
          margin: 'auto',
          width: 'fit-content',
    },
    formControl: {
          marginTop: theme.spacing.unit * 2,
          minWidth: 120,
    },
    formControlLabel: {
          marginTop: theme.spacing.unit,
    },
});

class Voucher extends Component{
    constructor(props){
        super(props);
        this.state={
            open: false,
            fullWidth: true,
            maxWidth: 'sm',
        }       
    }
    handleClickOpen = () => {
       this.setState({ open: true });
    };
    
    handleClose = () => {
       this.setState({ open: false });
    };
    
    handleMaxWidthChange = event => {
      this.setState({ maxWidth: event.target.value });
    };
    
    handleFullWidthChange = event => {
       this.setState({ fullWidth: event.target.checked });
    };

    render(){

        const { classes , menuToggle, authUser } = this.props;
        return(
            <React.Fragment>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                Open max-width dialog
                </Button>
            </React.Fragment>
        )
       
    }
}

const mapStateToProps = (state) => {
    return {
        menuToggle : state.MenuToggle,
        authUser : state.AuthUser
    };
}

export default connect(mapStateToProps, null)(withStyles(styles)(Voucher))