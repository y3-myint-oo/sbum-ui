import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { connect }  from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import CircleMenu from './icon';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Loop';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const styles = theme => ({
    root: {
        flexGrow: 1,        
    },
    grow: {
        flexGrow: 1,
    },
    Onroot:{
        marginLeft: theme.spacing.unit*30,
        backgroundColor:'#fee',
    },
    Offroot:{
       marginLeft: theme.spacing.unit*8,
    },
     toolBar:{
        boxShadow: '0px 0px 10px 0px rgba(76,175,80, .9)',
    },
    box:{
        padding: theme.spacing.unit*5,
    },
    unitShow:{
        width: '50hw',
        height:'50vh',
        backgroundColor: 'red',
    }
});

class Unit extends Component{
    render(){
        console.log( )
        const { classes , menuToggle } = this.props;
        if ( menuToggle){
            return(
                <div className={classes.Offroot}>
                        <UnitContent classes={classes} />
                </div>
            )
        }else{
            return(
                <div className={classes.Onroot}>
                        <UnitContent classes={classes} />
                </div>
            )
        }
    }
}


const units = [
    {id:"0001",name:"တင်းရေ",count:"၁"},
    {id:"0002",name:"အိတ်",count:"၁"},
    {id:"0003",name:"ပြည်",count:"၁"},
    {id:"0004",name:"ပိသာ",count:"၁"},
]
class UnitContent extends Component{
    
    constructor(props){
        super(props);
        this.state={
          
        }        
    } 
    onSlideChange(e) {
        console.log('Item`s position during a change: ', e.item);
        console.log('Slide`s position during a change: ', e.slide);
    };
    
    onSlideChanged(e) {
        console.log('Itemitem`s position after changes: ', e.item);
        console.log('Slide`s position after changes: ', e.slide);
    };

    galleryItems() {
        return (
            units.map((unit, i) => (            
            <div key={`key-${i}`} style={{padding:20}}>
             <Typography variant="title" align="center">   
                {unit.count}
             </Typography>   
             <br />
             <br />
             <Typography variant="h2" align="center">   
                {unit.name}
             </Typography>
            </div>
          ))
        )
    };

    render(){
        const items = this.galleryItems();
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <CircleMenu />
                <AppBar position="sticky" color="default">
                    <Toolbar className={classes.toolBar}>
                    <Typography variant="h6" color="primary">
                        အတိုင်းအတာ ယူနစ်များ
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.ads}>
                       LKlkfsdfjs
                    </div>    
                    </Toolbar>
                </AppBar>
                <div className={classes.box}>
                    <Grid container>
                        <Grid item md={4}> 
                            <Grid container>
                                <Grid item md={12}>
                                <AliceCarousel
                                    items={items}
                                    duration={400}
                                    autoPlay={true}
                                    startIndex = {1}
                                    fadeOutAnimation={true}
                                    mouseDragEnabled={true}
                                  ///  playButtonEnabled={true}
                                    autoPlayInterval={2000}
                                    autoPlayDirection="rtl"
                                   // responsive={this.responsive}
                                    disableAutoPlayOnAction={true}
                                    onSlideChange={this.onSlideChange}
                                    onSlideChanged={this.onSlideChanged}
                                />  
                                </Grid>
                                <Grid item md={12}>
                                    Add New Unit
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={8}>
                            Right
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuToggle : state.MenuToggle
    };
}

export default connect(mapStateToProps, null)(withStyles(styles)(Unit))