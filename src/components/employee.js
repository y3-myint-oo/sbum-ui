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
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';


import AddEmpIcon from '@material-ui/icons/PersonAdd';
import PayRollIcon from '@material-ui/icons/AccountBalanceWallet';
import CheckInIcon from '@material-ui/icons/SwapHoriz';
import LeaveIcon from '@material-ui/icons/Drafts';
import PosIcon from '@material-ui/icons/AccountBox';
import PerIcon from '@material-ui/icons/TrendingUp';
import EmpsIcon from '@material-ui/icons/Group';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';



const styles = theme => ({
    test:{
        backgroundColor:'red',
    },
    root: {
        flexGrow: 1,        
    },
    stepBox:{
       paddingLeft: theme.spacing.unit*2,
       paddingRight: theme.spacing.unit*2,
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
    icon:{
        marginLeft:'auto',
        marginRight: 'auto',
    },
    display:{
        padding: theme.spacing.unit*5,
    },
    card:{
        boxShadow: '0px 0px 10px 0px rgba(76,175,80, .9)',
        maxWidth: '200',
        height: '200',
    },
    box:{
        height:'50vh',
    },
    instruction:{
        paddingTop: theme.spacing.unit*10,
        paddingBottom: theme.spacing.unit*3,
    },
});

class Employees extends Component{
    render(){
        console.log( )
        const { classes , menuToggle } = this.props;
        if ( menuToggle){
            return(
                <div className={classes.Offroot}>
                        <EmployeeContent classes={classes} />
                </div>
            )
        }else{
            return(
                <div className={classes.Onroot}>
                        <EmployeeContent classes={classes} />
                </div>
            )
        }
    }
}

class EmployeeContent extends Component{
    constructor(props){
        super(props);
        this.state={
           currentView:0,
        }        
        this.handleSwapView=this.handleSwapView.bind(this)
    } 
    handleSwapView(value){
        this.setState({currentView:value})
    }
    render(){
        const { classes } = this.props;
        const { currentView } = this.state;
        return(
            <div className={classes.root}>
                <CircleMenu />
                <AppBar position="sticky" color="default">
                    <Toolbar className={classes.toolBar}>
                    <Typography variant="h6" color="primary">
                        ၀န်ထမ်းများ
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.ads}>
                       
                    </div>    
                    </Toolbar>
                </AppBar>
                <Grid container className={classes.display}>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={8}
                        align="center"
                        justify="space-evenly"
                        alignItems="stretch"
                        >
                            <Grid item xs={4} sm={4}>
                                <Card className={classes.card}>
                                <CardActionArea onClick={e=>this.handleSwapView(0)}>
                                    <CardContent>
                                        <div className={classes.icon}>
                                            <AddEmpIcon color='primary' fontSize='large'/>
                                        </div>
                                        <Typography variant="body1" color="primary" gutterBottom>
                                            ၀န်ထမ်းအသစ်
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card className={classes.card}>
                                <CardActionArea onClick={e=>this.handleSwapView(1)}>
                                    <CardContent>
                                        <div className={classes.icon}>
                                            <PayRollIcon color='primary' fontSize='large'/>
                                        </div>
                                        <Typography variant="body1" color="primary" gutterBottom>
                                            လစာ
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>    
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card className={classes.card}>
                                <CardActionArea onClick={e=>this.handleSwapView(2)}>
                                    <CardContent>
                                        <div className={classes.icon}>
                                            <CheckInIcon     color='primary' fontSize='large'/>
                                        </div>
                                        <Typography variant="body1" color="primary" gutterBottom>
                                            ရုံးတက်၊ရုံးဆင်း
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>    
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card className={classes.card}>
                                <CardActionArea onClick={e=>this.handleSwapView(3)}>
                                    <CardContent>
                                        <div className={classes.icon}>
                                            <LeaveIcon color='primary' fontSize='large'/>
                                        </div>
                                        <Typography variant="body1" color="primary" gutterBottom>
                                            အလုပ်ခွင့်
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>    
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card className={classes.card}>
                                <CardActionArea onClick={e=>this.handleSwapView(4)}>
                                    <CardContent>
                                        <div className={classes.icon}>
                                            <PosIcon color='primary' fontSize='large'/>
                                        </div>
                                        <Typography variant="body1" color="primary" gutterBottom>
                                            ရာထူးများ
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>   
                                </Card>    
                            </Grid>
                            <Grid item xs={4}>
                                <Card className={classes.card}>
                                <CardActionArea onClick={e=>this.handleSwapView(5)}>
                                    <CardContent>
                                        <div className={classes.icon}>
                                            <PerIcon color='primary' fontSize='large'/>
                                        </div>
                                        <Typography variant="body1" color="primary" gutterBottom>
                                            လုပ်ငန်းစွမ်းရည်
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>    
                                </Card>    
                            </Grid>
                            <Grid item xs={4}>
                                <Card className={classes.card}>
                                <CardActionArea onClick={e=>this.handleSwapView(6)}>
                                    <CardContent>
                                        <div className={classes.icon}>
                                            <EmpsIcon color='primary' fontSize='large'/>
                                        </div>
                                        <Typography variant="body1" color="primary" gutterBottom>
                                            ၀န်ထမ်းများ
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>    
                                </Card>    
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        {
                            currentView == 0 &&(
                                <AddEmpContent  classes={classes}/>
                            )
                        }
                        {
                            currentView == 1 &&(
                                <PayRollContent />
                            )
                        }
                        {
                            currentView == 2 &&(
                                <CheckInOutContent />
                            )
                        }
                        {
                            currentView == 3 &&(
                                <LeaveContent />
                            )
                        }
                        {
                            currentView == 4 &&(
                                <PositionContent />
                            )
                        }
                        {
                            currentView == 5 &&(
                                <PerforContent />
                            )
                        }
                        {
                            currentView == 6 &&(
                                <EmpsContent />
                            )
                        }
                    </Grid>
                </Grid>
            </div>
        )
    }
}

class AddEmpContent extends Component{
    constructor(props){
        super(props);
        this.state={
            activeStep: 0,
            skipped: new Set(),
        }              
    } 
    isStepOptional = step => {
        return step === 1;
    }; 
    handleNext = () => {
        const { activeStep } = this.state;
        let { skipped } = this.state;
        if (this.isStepSkipped(activeStep)) {
          skipped = new Set(skipped.values());
          skipped.delete(activeStep);
        }
        this.setState({
          activeStep: activeStep + 1,
          skipped,
        });
    };
    handleBack = () => {
        this.setState(state => ({
          activeStep: state.activeStep - 1,
        }));
    }
    handleSkip = () => {
        const { activeStep } = this.state;
        if (!this.isStepOptional(activeStep)) {
          throw new Error("You can't skip a step that isn't optional.");
        }
    
        this.setState(state => {
          const skipped = new Set(state.skipped.values());
          skipped.add(activeStep);
          return {
            activeStep: state.activeStep + 1,
            skipped,
          };
        });
    };
    handleReset = () => {
        this.setState({
          activeStep: 0,
        });
      };
    
    isStepSkipped(step) {
        return this.state.skipped.has(step);
    }    
    
    render(){
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;
        return(
            <div>
                   <div className={classes.stepBox}>
                        <Grid container>
                            
                            <Grid item xs={12}>
                                <Stepper alternativeLabel nonLinear activeStep={activeStep}>
                                {steps.map((label, index) => {
                                            const props = {};
                                            const labelProps = {};
                                            if (this.isStepOptional(index)) {
                                            labelProps.optional = <Typography variant="caption"></Typography>;
                                            }
                                            if (this.isStepSkipped(index)) {
                                            props.completed = false;
                                            }
                                            return (
                                            <Step key={label} {...props}>
                                                <StepLabel {...labelProps}>{label}</StepLabel>
                                            </Step>
                                            );
                                        })}
                                </Stepper>
                 
                            {activeStep === steps.length ? (
                                <div>
                                    <Typography className={classes.instruction} align="center">
                                        ၀န်ထမ်း အသစ်အား အောင်မြင်စွာ စားရင်းသွင်းပြီးပါပြီ။
                                    </Typography>                                
                                </div>
                            ) : (
                                <div className={classes.box}>
                                    <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                </div>
                                 )}                        
                                </Grid>
                               
                                {activeStep === steps.length ? (
                                    <Grid item md={12}>
                                        <Grid container justify="center" align="center" alignItems="stretch">
                                        <Grid item xs={12}>
                                            <Button onClick={this.handleReset} variant="outlined" color="secondary">
                                                ထပ်မှန်၍ အသစ်ပြုလုပ်မည်
                                            </Button>
                                        </Grid>
                                        </Grid>
                                    </Grid>
                                ):(
                                    <Grid item xs={12}>
                                    <Grid container align="center">
                                    <Grid item xs={4}>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={this.handleBack}
                                            variant="outlined" color="primary"
                                            >
                                           အနောက်သို့
                                        </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        {this.isStepOptional(activeStep) && (
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={this.handleSkip}
                                                variant="outlined" color="primary"
                                            >
                                                အဆင့်ကျော်မည်
                                        </Button>
                                        )}
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleNext}
                                            variant="outlined" color="primary"
                                            >
                                            {activeStep === steps.length - 1 ? 'သေချာပါသည်' : 'အရှေ့သို့'}
                                        </Button>                                            
                                    </Grid>
                                    </Grid>
                                    </Grid>
                                )}
                                
                        </Grid>
                    </div>
            </div>
        )
    }
    
}
    function getSteps() {
        return ['ကိုယ်ရေးအချက်အလက်ဖြည့်မည်', 'မှတ်ပုံတင်မည်', 'ပြုလုပ်ရန်သေချာပါသည်'];
    }
  
    function getStepContent(step) {
        switch (step) {
        case 0:
            return <div>
                
            </div>
            
        case 1:
            return '၀န်ထမ်း၏ နိုင်ငံသားကပ်ပြားအား မှတ်ပုံတင်မည်';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown step';
    }
  }

class PayRollContent extends Component{
    render(){
       
        return(
            <div>
                Manage Pay roll 
            </div>
        )
    }
}

class CheckInOutContent extends Component{
    render(){
        return(
            <div>
                Manage Check in check out
            </div>
        )
    }
}

class LeaveContent extends Component{
    render(){
        return(
            <div>
                Manage Leaves
            </div>
        )
    }
}


class PositionContent extends Component{
    render(){
        return(
            <div>
                Manage Positions
            </div>
        )
    }
}

class PerforContent extends Component{
    render(){
        return(
            <div>
                Manage Performance Content
            </div>
        )
    }
}

class EmpsContent extends Component{
    render(){
        return(
            <div>
                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        menuToggle : state.MenuToggle
    };
}

export default connect(mapStateToProps, null)(withStyles(styles)(Employees))