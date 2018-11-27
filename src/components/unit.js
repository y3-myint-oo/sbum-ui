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
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

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
    },
    card: {
        maxWidth: '50hw',
        boxShadow: '0px 0px 10px 0px rgba(76,175,80, .9)',
    },
    card2:{
        width:'auto',
        height:120,
        boxShadow: '0px 0px 10px 0px rgba(76,175,80, .9)',
    },
    gridList:{
        paddingLeft: theme.spacing.unit*5,
        paddingRight: theme.spacing.unit*5,
        width: '100%',
        height: '70vh',
       // backgroundColor:'red',
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
    {id:"0001",name:"တင်းရေ",count:"၁",
        converter:[
            {name:"တင်းရေ",cross:"၁"},
            {name:"အိတ်",cross:"၂၀"},
            {name:"ပြည်",cross:"၂"},
            {name:"ပိသာ",cross:"၁"},
        ]
    },
    {id:"0002",name:"အိတ်",count:"၂",
        converter:[
            {name:"တင်းရေ",cross:"၁၀"},
            {name:"အိတ်",cross:"၂"},
            {name:"ပြည်",cross:"၂"},
            {name:"ပိသာ",cross:"၁"},
        ]
    },
    {id:"0003",name:"ပြည်",count:"၁",
        converter:[
            {name:"တင်းရေ",cross:"၁၀"},
            {name:"အိတ်",cross:"၂၀"},
            {name:"ပြည်",cross:"၁"},
            {name:"ပိသာ",cross:"၁၁"},
        ]
    },
    {id:"0004",name:"ပိသာ",count:"၁",
        converter:[
            {name:"တင်းရေ",cross:"၁၀"},
            {name:"အိတ်",cross:"၂၀"},
            {name:"ပိသာ",cross:"၁"},
           
        ]
    },
]



class UnitContent extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedIndex:0,
        }        
        this.handleBack=this.handleBack.bind(this)
        this.handleForward=this.handleForward.bind(this)

    } 
    handleBack(){
        if ( this.state.selectedIndex == 0 ){
            this.setState({selectedIndex:units.length-1})
        }else{
            this.setState({selectedIndex:this.state.selectedIndex-1})
        }
    }
    handleForward(){
        if ( this.state.selectedIndex == units.length-1 ){
            this.setState({selectedIndex:0})
        }else{
            this.setState({selectedIndex:this.state.selectedIndex+1})
        }
    } 
   
    render(){
        const unit = units[this.state.selectedIndex];
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
                            <Grid container spacing={8}>
                                <Grid item xs={6} sm={6} md={6} align="left">
                                        <Button                                        
                                            onClick={this.handleBack}
                                            variant="outlined" color="primary"
                                            >
                                           အနောက်သို့
                                        </Button>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} align="right">
                                        <Button                                                                                       
                                            onClick={this.handleForward}
                                            variant="outlined" color="primary"
                                            >
                                            အရှေ့သို့
                                        </Button>
                                </Grid>
                                <Grid item md={12}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography gutterBottom variant="title" align="center">
                                                    {unit.count}
                                                </Typography>
                                                <br />

                                                <Typography gutterBottom variant="h2" align="center">
                                                    {unit.name}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>    
                                </Grid>
                                <Grid item md={12}>
                                    Add New Unit
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={8}>
                            <GridList cellHeight={80} className={classes.gridList}  cols={4} spacing={8}>
                                {
                                   unit.converter.map(function(item, i){
                                       console.log(item)
                                        return <div key={i}>
                                            <Card className={classes.card2}>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" align="center">
                                                        {item.name}
                                                    </Typography>
                                                    <Typography gutterBottom variant="h4" align="center">
                                                        {item.cross}
                                                    </Typography>
                                                </CardContent>                                             
                                            </Card>                                                
                                        </div>
                                  })
                                }
                            </GridList>
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