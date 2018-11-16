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
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const styles = theme => ({
   
     Onroot:{
         marginLeft: theme.spacing.unit*30,
         backgroundColor:'#fee',
     },
     Offroot:{
        marginLeft: theme.spacing.unit*8,
     },
    root: {
        flexGrow: 1,
        
    },
    toolBar:{
        boxShadow: '0px 0px 10px 0px rgba(76,175,80, .9)',
    },
    grow: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade("#357a38", 0.15),
        '&:hover': {
          backgroundColor: fade("#357a38", 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing.unit,
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        width: '100%',
      },
      inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 120,
          '&:focus': {
            width: 200,
          },
        },
      },
      content:{
        margin: theme.spacing.unit * 2,
      },
    paper:{
        padding: theme.spacing.unit * 2,
        boxShadow: '0px 0px 2px 2px rgba(76,175,80, .7)',
    },
    gridList: {
        display:'block',
        width: '106%',
        height: theme.spacing.unit*62,     
        paddingTop:theme.spacing.unit*3,
    },
    menuButton:{
        width:'80%',
        marginLeft:'auto',
        marginRight: 'auto',
        zIndex:2,
    },
    addButton:{
        boxShadow: '0px 0px 2px 2px rgba(76,175,80, .7)',
        color:"#357a38",
    },
    card:{
        width:'100%',
        height:100,
        marginRight:'auto',
        marginLeft:'auto',
        marginTop:10,
        zIndex: -1,       
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
        zIndex: -1,   
    },
    settingButton:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight:'2%',
        marginLeft:'auto',
    },
    settingIcon:{
        height: 20,
        width: 20,
    },
});

class Warehouse extends Component{
    render(){
        console.log( )
        const { classes , menuToggle } = this.props;
        if (menuToggle){
            return(
                <div className={classes.Offroot}>
                    <WarehouseContent classes={classes} />
                </div>
            )
        }else{
            return(
                <div className={classes.Onroot}>
                    <WarehouseContent classes={classes} />
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

const warehouseItems = [
    {id:"1",code:"co001",name:"ပဲစိမ်း",unit:"တင်းရေ"},
    {id:"2",code:"b002",name:"ရွေဘိုပေါ်ဆန်း",unit:"အိတ်"},
    {id:"3",code:"co002",name:"ပြောင်းဘူး",unit:"အိတ်"},
    {id:"4",code:"co390",name:"ပဲတူးတီ",unit:"ပြည်"},
    {id:"1",code:"co199",name:"မပဲ",unit:"တင်းရေ"},
    {id:"2",code:"co453",name:"စတော်ပဲ",unit:"တင်းရေ"},
    {id:"3",code:"co212",name:"ပဲခြမ်း",unit:"ပိသာ"},
    {id:"4",code:"co138",name:"ပဲပုတ်",unit:"ပိသာ"},
]

class WarehouseContent extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedItem:warehouseItems[0],   
        }        
        this.handleSelectedItem=this.handleSelectedItem.bind(this)
    } 
    handleSelectedItem(data){
        console.log(data)
        this.setState({selectedItem:data})
    }
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
            <CircleMenu />
            <AppBar position="sticky" color="default">
                <Toolbar className={classes.toolBar}>
                <Typography variant="h6" color="primary">
                    Label
                </Typography>
                <div className={classes.grow} />
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Search"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    />
                </div>    
                </Toolbar>
            </AppBar>
            <div className={classes.content}>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={4}>
                        <div className={classes.menuButton}>
                        <Button variant="extendedFab" aria-label="addNewItem" fullWidth className={classes.addButton}>
                            <AddIcon />
                            ကုန်ပစ္စည်းအသစ်ထည့်မည်
                        </Button>   
                        </div>
                        <Paper className={classes.paper} style={{marginTop:-20}}>
                            <GridList cellHeight={200} spacing={25} cols={1} className={classes.gridList}>
                                {warehouseItems.map(item => (
                                   <WarehouseItemUI item={item} classes={classes} handleItem={this.handleSelectedItem}/>
                                ))}
                            </GridList>    
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Paper className={classes.paper}>
                                <WarehouseItemView data={this.state.selectedItem} classes={classes}/>
                         </Paper>
                    </Grid>
                </Grid>        
            </div>    
        </div>   
        )
    }

}



class WarehouseItemUI extends Component{
    render(){
        const { classes,item,handleItem } = this.props;
        return(
          
                 <Card className={classes.card}>
                 <CardActionArea onClick={e => handleItem(item)}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5" color="primary" align="left">
                                {item.name}
                            </Typography>
                            <Typography component="caption" variant="caption" align="left">
                                {item.code}
                            </Typography>
                                                  
                        </CardContent>
                        <div className={classes.settingButton}>
                            <Typography component="caption" variant="caption" color="secondary" align="left">
                                {item.unit}
                            </Typography>
                            <IconButton variant="fab" aria-label="Delete">
                                <DeleteIcon className={classes.settingIcon}/>
                            </IconButton>
                        </div>    
                        
                    </div>
                    </CardActionArea>
                </Card>  
  
        )
    }
}

class WarehouseItemView extends Component{

    render(){
        const { classes,data } = this.props;
        return (
            <div>
                   <Typography component="caption" variant="caption" align="left">
                                {data.name}
                    </Typography>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(withStyles(styles)(Warehouse))