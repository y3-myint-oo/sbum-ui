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
import AddIcon from '@material-ui/icons/PersonAdd';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer } from 'recharts';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PrintIcon from '@material-ui/icons/Print';
import SettingIcon from '@material-ui/icons/Settings';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import AutoIcon from '@material-ui/icons/Autorenew';
import PhoneIcon from '@material-ui/icons/PhoneForwarded';
import {UserCard} from 'react-ui-cards';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import CopyIcon from '@material-ui/icons/FileCopy'


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
    flex:{
        flex: 1,
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
        
        [theme.breakpoints.down('sm')]: {
            width: '103%',
        },
    },
    menuButton:{
        width:'60%',
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
        flexDirection: 'row',
        alignItems: 'center',
        marginRight:'2%',
        marginLeft:'auto',
    },
    settingIcon:{
        height: 20,
        width: 20,
    },
    view:{
        width:'100%',
        height:'auto',
    },
    viewTab:{
       // marginTop:theme.spacing.unit*,
        backgroundColor:'#357a38',
        fontWeight:'bold',
    },
    display:{
        minHeight: theme.spacing.unit*20,
    },
    spacing:{
        //paddingLeft:theme.spacing.unit*3,
    },
    bpacing:{
        paddingLeft:theme.spacing.unit*2,
    },
    viewSettingButton:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight:'2%',
        marginLeft:'auto',
       // backgroundColor: 'red',
    },
    dialog: {
        position: 'absolute',
        width: theme.spacing.unit * 70,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
    phone:{
        position: 'absolute',
        width: theme.spacing.unit * 40,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        alignContent: 'center',
    }
});

class Supply extends Component{
    render(){
        console.log( )
        const { classes , menuToggle } = this.props;
        if (menuToggle){
            return(
                <div className={classes.Offroot}>
                    <SupplyContent classes={classes} />
                </div>
            )
        }else{
            return(
                <div className={classes.Onroot}>
                    <SupplyContent classes={classes} />
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

const SupplyItems = [
    {id:"1",code:"co001",name:"ဦးမြ",description:"",phone:"092053182",addr:"အမှတ် (၂) အိပ်အမှတ် ၇ , မင်းတုန်းလမ်း",township:"ရွှေဘို",division:"မန္တလေးမြို့"},
    {id:"2",code:"b002",name:"ဦးဘ",description:"",phone:"09205212",addr:"",township:"ရွှေဘို",division:"မန္တလေးမြို့"},
    {id:"3",code:"co002",name:"ဦးချစ်မောင်",description:"",phone:"09952141233",addr:"ပုဇွန်တောင်အထက်လမ်း တိုက် (၂) ၄ လွှာ",township:"ပုဇွန်တောင်",division:"ရန်ကုန်"},
    {id:"4",code:"co390",name:"ဦးအောင်ကို",description:"",phone:"099543847372",addr:"",township:"",division:""},
    {id:"1",code:"co199",name:"ဒေါ်ခင်အေး",description:"",phone:"09972226432",addr:"",township:"",division:""},
    {id:"2",code:"co453",name:"ဦးလှမောင်",description:"",phone:"092053182",addr:"",township:"",division:""},
    {id:"3",code:"co212",name:"ခင်နု",description:"",phone:"092053182",addr:"",township:"",division:""},
    {id:"4",code:"co138",name:"မမြကြည်",description:"",phone:"09259116768",addr:"",township:"",division:""},
]
const units=[
    {name:"တင်းရေ"},
    {name:"အိတ်"},
    {name:"ပြည်"},
    {name:"ပိသာ"},
]
const divisions=[
    {name:"မန္တလေးမြို့"},
    {name:"ရန်ကုန်မြို့"},
    {},
]

class SupplyContent extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedItem:SupplyItems[0],  
            selectedView:0, 
            dialogOpen:false,
            snackOpen:false,
        }        
        this.handleSelectedItem=this.handleSelectedItem.bind(this)
        this.handleDialog=this.handleDialog.bind(this)
        this.handleSnack=this.handleSnack.bind(this)
    } 
    handleSelectedItem(data){
        console.log(data)
        this.setState({selectedItem:data})
    }
    handleDialog(){
        this.setState({dialogOpen:!this.state.dialogOpen})
    }
    handleSnack(){
        this.setState({snackOpen:!this.state.snackOpen})
    }
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
            <CircleMenu />
            <AppBar position="sticky" color="default">
                <Toolbar className={classes.toolBar}>
                <Typography variant="h6" color="primary">
                    တောင်သူ
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
                    <Grid item xs={12} sm={12} md={4}>
                        <div>
                            <Grid container>
                                <Grid item  sm={12}>
                                        
                                </Grid>
                            </Grid>  
                        </div>    
                        
                        <div className={classes.menuButton}>
                        <Button variant="extendedFab" aria-label="addNewItem" fullWidth className={classes.addButton}
                        onClick={this.handleDialog}
                        >             
                            <AddIcon />
                            တောင်သူ အသစ်ထည့်မည်
                        </Button>   
                        </div>
                        <Paper className={classes.paper} style={{marginTop:-20}}>
                            <GridList cellHeight={200} spacing={25} cols={1} className={classes.gridList}>
                                {SupplyItems.map(item => (
                                   <SupplyItemUI item={item} classes={classes} handleItem={this.handleSelectedItem}/>
                                ))}
                            </GridList>    
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        
                        <SupplyItemView data={this.state.selectedItem} classes={classes}/>
                         
                      
                    </Grid>
                </Grid>  

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.dialogOpen}
                    onClose={this.handleDialog}
                    >
                    <div style={getModalStyle()} className={classes.dialog}>
                        <NewItemDialog  classes={classes} close={this.handleDialog} snackMsg={this.handleSnack}/> 
                    </div>
                </Modal>   
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.snackOpen}
                    onClose={this.handleSnack}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={
                    <span id="message-id">I love snacks</span>
                    }
                    action={[
                        <IconButton
                           color="inherit"
                          onClick={this.handleSnack}
                        >
                          <CloseIcon />
                        </IconButton>,
                      ]}
                />   
            </div>    
        </div>   
        )
    }

}

function getModalStyle() {
    const top = 50 ;
    const left = 50;  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

class NewItemDialog extends Component{
    constructor(props){
        super(props);
        this.state={
            unit:units[0],
            sellPrice:0,
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleSnackMessage= this.handleSnackMessage.bind(this);
    } 
    handleClose(){
        console.log("Close")
        this.props.close()
    }
    handleSave(){
        console.log("Save")
        this.props.close()
    }
    handleChangeUnit(){
        console.log("Unit Change")
    }
    handleSnackMessage(){
        this.props.close()
        this.props.snackMsg()
    }
    render(){
        const { classes } = this.props;
        return(
            <div>
                <AppBar position='fixed'>
                        <Toolbar>                       
                        <Typography variant="h6" color="inherit" className={classes.flex}>
                            ကုန်ပစ္စည်း အမျိုးအစာ အသစ်ထည့်မည်
                        </Typography>
                        <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                        </Toolbar>
                </AppBar>
                <div style={{paddingTop:50}} >
                <Grid container spacing={24}>
                    <Grid item xs={12} >
                                <Typography variant="caption" gutterBottom align="left">
                                    ကုန်ပစ္စည်းအမှတ်အသားဃူနစ်
                                </Typography> 
                                <spam className={classes.spacing} /> 
                                <Input
                                    defaultValue=""
                                    inputProps={{
                                    'aria-label': 'Description',
                                    }}
                                />
                                
                                    <IconButton aria-label="Auto">
                                        <AutoIcon />
                                    </IconButton>
                               
                                
                    </Grid>
                    <Grid item xs={6} >
                                <TextField
                                required
                                id="standard-required"
                                label="ကုန်ပစ္စည်းအမည်"
                                defaultValue=" "
                                className={classes.textField}
                                margin="normal"
                                />
                    </Grid>
                    <Grid item xs={6} >
                                <TextField
                                fullWidth
                                id="standard-select-currency"
                                select
                                label="ကုန်ပစ္စည်းအတိုင်းအတာယူနစ်"
                                value={this.state.unit}
                                onChange={this.handleChangeUnit()}
                                margin="normal"
                                >
                                {units.map(option => (
                                    <MenuItem key={option.name} value={option.name}>
                                    {option.name}
                                    </MenuItem>
                                ))}
                                </TextField>
                    </Grid>
                    <Grid item xs={6} >
                                <Typography variant="caption" gutterBottom align="left">
                                    လက်ရှိရောင်းစျေး
                                </Typography> 
                                <spam className={classes.spacing} /> 
                                <Input
                                    defaultValue=""
                                    inputProps={{
                                    'aria-label': 'Description',
                                    }}
                                /> 
                    </Grid>
                    <Grid item xs={6} >
                                <Typography variant="caption" gutterBottom align="left">
                                    ၀ယ်စျေး
                                </Typography> 
                                <spam className={classes.spacing} /> 
                                <Input
                                    defaultValue=""
                                    inputProps={{
                                    'aria-label': 'Description',
                                    }}
                                />
                    </Grid>
                    <Grid item xs={6} >
                        <Button  variant="outlined" color="primary" onClick={this.handleSnackMessage}>
                            သိမ်းမည်
                        </Button>   
                        <spam className={classes.bpacing}/>
                        <Button  variant="outlined" color="secondary" onClick={this.handleSnackMessage}>
                            ပယ်ဖျက်မည်
                        </Button>
                    </Grid>


                     
                </Grid>
                </div>
            </div>
        )
    }
}


class SupplyItemUI extends Component{
    constructor(props){
        super(props);
        this.state={
            dialogPhoneBook:false,
            value: '',
            copied: false,
        }
        this.handlePhoneBook=this.handlePhoneBook.bind(this)
    } 
    handlePhoneBook(){
        this.setState({dialogPhoneBook:!this.state.dialogPhoneBook})
    }
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
                        </CardContent>
                        <div className={classes.settingButton}>
                            <IconButton variant="fab" aria-label="Delete">
                                <DeleteIcon className={classes.settingIcon}/>
                            </IconButton>
                            <IconButton variant="fab" aria-label="Phone" onClick={this.handlePhoneBook}>
                                <PhoneIcon className={classes.settingIcon}/>
                            </IconButton>
                        </div>    
                    </div>
                    </CardActionArea>
                        <Modal
                            aria-labelledby="phone-book"
                            aria-describedby="framer phone book"
                            open={this.state.dialogPhoneBook}
                            onClose={this.handlePhoneBook}
                            >
                            <div style={getModalStyle()} className={classes.phone}>
                                <AppBar position='fixed'>
                                        <Toolbar>                       
                                        <Typography variant="h6" color="inherit" className={classes.flex}>
                                            {item.name} ကို ဆက်သွယ်ရန်
                                        </Typography>
                                        <IconButton color="inherit" onClick={this.handlePhoneBook} aria-label="Close">
                                            <CloseIcon />
                                        </IconButton>
                                        </Toolbar>
                                </AppBar>
                                <div style={{paddingTop:50}}>                                   
                                    <Typography component="h2" variant="headline" gutterBottom align="center">
                                            {item.phone}                                           
                                    </Typography>                    
                                    <Typography variant="subheading" gutterBottom align="center">
                                            {item.addr}
                                    </Typography>
                                    <Typography variant="subheading" gutterBottom align="center">
                                            {item.township}
                                    </Typography>
                                    <Typography component="h6" variant="headline" gutterBottom align="center">
                                            {item.division}
                                    </Typography>
                                </div>
                            </div>
                        </Modal>   
                </Card>  
  
        )
    }
}


const HistoryData = [
    {month: 'Jan', uv: 4000, pv: 2400},
    {month: 'Feb', uv: 3000, pv: 1398},
    {month: 'Mar', uv: 2000, pv: 1800},
    {month: 'Apr', uv: 2780, pv: 3908},
    {month: 'May', uv: 1890, pv: 4800},
    {month: 'Jun', uv: 2390, pv: 3800},
    {month: 'Jul', uv: 3490, pv: 4300},
    {month: 'Aug', uv: 2780, pv: 3908},
    {month: 'Sep', uv: 1890, pv: 4800},
    {month: 'Oct', uv: 2390, pv: 3800},
    {month: 'Nov', uv: 3490, pv: 4300},
    {month: 'Dec', uv: 3490, pv: 4300},

];

class SupplyItemView extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedView:0,  //buy price history, sell price history , with year filter
        }        
        this.handleChange=this.handleChange.bind(this)
 
    } 
    handleChange(view){
        this.setState({selectedView:view})
    }
   
    render(){
        const { classes,data } = this.props;
        const { selectedView } = this.state;
        return (
            <div className={classes.view}>
                <Grid container >
                    <Grid item xs={12}>                        
                        <AppBar position="static"
                        classes={{
                            root:classes.viewTab,
                        }}
                        >
                            <Tabs value={selectedView}>
                                <Tab label="ကိုယ်ရေးအကျဥ်းချုပ်" onClick={e=>this.handleChange(0)}/>
                                <Tab label="သိုလှောင်ပစ္စည်းများ" onClick={e=>this.handleChange(1)}/>
                                <Tab label="လုပ်ဆောင်ချက်များ" onClick={e=>this.handleChange(2)}/>
                            </Tabs>
                        </AppBar>    
                        {selectedView === 0 && 
                        <TabContainer>
                            <Grid container spacing={24}>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="caption" gutterBottom align="left">
                                            တောင်သူအမည်
                                    </Typography> 
                                    <spam className={classes.spacing} /> 
                                    <Typography variant="title" align="left">
                                        {data.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="caption" gutterBottom align="left">
                                            ဆက်သွယ်ရန်ဖုန်းနံပါတ်
                                    </Typography> 
                                    <spam className={classes.spacing} /> 
                                    <Typography variant="title" align="left">
                                        {data.phone}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="caption" gutterBottom align="left">
                                            တိုင်းဒေသကြီး
                                    </Typography> 
                                    <spam className={classes.spacing} /> 
                                    <Typography variant="title" align="left">
                                        {data.division}
                                    </Typography>
                                </Grid>
                                
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="caption" gutterBottom align="left">
                                            ဆက်သွယ်ရန်လိပ်စာ
                                    </Typography> 
                                    <spam className={classes.spacing} /> 
                                    <Typography variant="title" align="left">
                                        {data.addr}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </TabContainer>}
                        {selectedView === 1 && <TabContainer>
                            သိုလှောင်ပစ္စည်းများ
                        </TabContainer>}
                        {selectedView === 2 && <TabContainer>
                            လုပ်ဆောင်ချက်များ
                        </TabContainer>}
                             
                      </Grid>
                </Grid>
            </div>
        )
    }
}

function TabContainer(props) {
    return (
        <Paper style={{ padding: 8 * 3 ,boxShadow: '0px 0px 2px 1px rgba(76,175,80, .7)'}}>
             {props.children}
        </Paper>  
    );
  }




export default connect(mapStateToProps, null)(withStyles(styles)(Supply))