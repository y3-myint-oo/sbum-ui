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
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

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
        height:'auto',
        boxShadow: '0px 0px 10px 0px rgba(76,175,80, .9)',
    },
    gridList:{
        padding: theme.spacing.unit*5,
        width: '100%',
        height: '70vh',
    },
    unitField:{
       // paddingTop: theme.spacing.unit*5,
        paddingBottom: theme.spacing.unit*2,
        //color:'green',
    }
});

//http://localhost:8081/api/v1/unit
class Unit extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoading: true,          
            error: null,
            units:[],
        }
    } 
    render(){
        const { isLoading,units, error } = this.state;
        axios.get('http://localhost:8081/api/v1/unit',{
            headers: {
                'content-type': 'application/json',
            },
        },       
        ).then(res => {
            console.log(" response Unit data ", res.data.data)
            this.setState({units:res.data.data,isLoading:false})
            //this.setState({})
            console.log(" isLoading .. ",  isLoading)
        })  
        const { classes , menuToggle } = this.props;
        if ( menuToggle){
            return(
                <div className={classes.Offroot}>
                        {!isLoading ? (
                            <UnitContent classes={classes} units={this.state.units}/>
                        ):(
                            <div> Loading.. </div>
                        )}                       
                </div>
            )
        }else{
            return(
                <div className={classes.Onroot}>
                        {!isLoading ? (
                            <UnitContent classes={classes} units={this.state.units}/>
                        ):(
                            <div> Loading.. </div>
                        )}  
                </div>
            )
        }
    }
}





class UnitContent extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedIndex:0,
            units:this.props.units,
            nunit:"",
            dunit:null,
            deleteBoxShow:false,
        }        
        this.handleBack=this.handleBack.bind(this)
        this.handleForward=this.handleForward.bind(this)
        this.addNewUnit=this.addNewUnit.bind(this)
        this.handleNewUnit=this.handleNewUnit.bind(this)
        this.handleDeleteBox=this.handleDeleteBox.bind(this)
    } 
    handleBack(){
        if ( this.state.selectedIndex == 0 ){
            this.setState({selectedIndex:this.state.units.length-1})
        }else{
            this.setState({selectedIndex:this.state.selectedIndex-1})
        }
    }
    handleForward(){
        if ( this.state.selectedIndex == this.state.units.length-1 ){
            this.setState({selectedIndex:0})
        }else{
            this.setState({selectedIndex:this.state.selectedIndex+1})
        }
    } 

    handleDeleteBox(value){
       // console.log(" want to delete ", name)
        this.setState({dunit:value})
        this.setState({deleteBoxShow:!this.state.deleteBoxShow})
    }
    handleNewUnit(event){
        this.setState({nunit: event.target.value});
    }
    addNewUnit(){
        console.log(" New Unit name ", this.state.nunit);
    }

    render(){
        const {units} =this.state;
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

                                    <Grid container>
                                        <Grid item md={12} >
                                            <TextField
                                            label="အတိုင်းအတာယူနစ်"
                                            onInput={this.handleNewUnit}
                                            //defaultValue="Default Value"
                                            className={classes.unitField}
                                            helperText="၁ ယူနစ်စံချိန်နှုန်းဖြင့် တိုင်းတာသည်"
                                            margin="normal"
                                            variant="outlined"
                                            value={this.state.nunit}
                                            fullWidth
                                            />
                                        </Grid>
                                        <Grid item md={6} align="center">
                                            <Button variant="outlined" color="primary" onClick={this.addNewUnit}>
                                                ယူနစ်အသစ်ထည့်မည်
                                            </Button>
                                        </Grid>
                                        <Grid item md={6} align="center">
                                            <Button variant="outlined" color="secondary" fullwidth>
                                                ယူနစ်အားဖျက်မည်
                                            </Button>
                                        </Grid>
                                    </Grid>
                                   
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={8}>
                            <GridList className={classes.gridList} cellHeight="130" spacing={8} cols={4}>
                                <div>
                                    <Card className={classes.card2}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" align="center">
                                                    ပြောင်းလဲနှုန်း
                                            </Typography>
                                            <Typography gutterBottom color="primary" variant="h4" align="center">
                                                +
                                            </Typography>
                                        </CardContent> 
                                    </CardActionArea>                                                
                                    </Card> 
                                </div>
                                {
                                   unit.converter.map((item,i) => (
                                         <div key={i}>
                                            <Card className={classes.card2}>
                                            <CardActionArea onClick={e=>this.handleDeleteBox(item)}>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" align="center">
                                                        {item.name}
                                                    </Typography>
                                                    <Typography gutterBottom variant="h4" align="center">
                                                        {item.cross}
                                                    </Typography>
                                                </CardContent>   
                                            </CardActionArea>                                          
                                            </Card>                                                
                                        </div>
                                    ))
                                }
                                                                          
                                
                            </GridList>
                        </Grid>
                    </Grid>
                </div>
                <Dialog
                open={this.state.deleteBoxShow}
                onClose={this.handleDeleteBox}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">{"ပြောင်းလဲနှုန်းထားအား ပယ်ဖျက်လိုပါသလား"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    {
                        this.state.dunit !=null && (
                            <div>
                                ၁ {unit.name} ={this.state.dunit.cross} {this.state.dunit.name} အတိုင်းအတာယူနစ်ရှိသည်။
                            </div>
                        )
                    }                  
                    </DialogContentText>
                </DialogContent>
                <DialogActions>                   
                    <Button onClick={this.handleDeleteBox} color="secondary">
                    ပယ်မဖျက်ပါ
                    </Button>
                    <Button onClick={this.handleDeleteBox} color="primary">
                    ပယ်ဖျက်မည်
                    </Button>
                </DialogActions>
                </Dialog>
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