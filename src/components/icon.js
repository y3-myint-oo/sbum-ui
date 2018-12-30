import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Card } from '@material-ui/core';
import TouchIcon from '@material-ui/icons/TouchApp';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Voucher from './voucher';
import Grid from '@material-ui/core/Grid';
import { connect }  from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import dateFns from "date-fns";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
 

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
    dialogPaper: {
        minHeight: '80vh',
        maxHeight: '80vh',
        //backgroundColor: 'red',
    },
    bpacing:{
        paddingLeft:theme.spacing.unit,
    },
    inputBox:{
        marginTop: theme.spacing.unit,
        backgroundColor:'red',
    },
});

// Voucher Data - 
const voucherData = ["1", "1","1","1","1","1","1","1","1","1","1","1","1","1"];
const rowLen = voucherData.length;
class Icon extends Component{
    constructor(props){
        super(props);
        this.state={
            show:true,
            open: false,
            fullWidth: true,            
            maxWidth: 'xs',
            currentDate:new Date(),
        }
        this.handleShow= this.handleShow.bind(this)   
        this.handleClickOpen=this.handleClickOpen.bind(this)
        this.handleClose=this.handleClose.bind(this)
        this.handleMaxWidthChange=this.handleMaxWidthChange.bind(this)
        this.handleFullWidthChange=this.handleFullWidthChange.bind(this)
    }
    handleShow(){
        console.log(this.state.show)
        this.setState({show:!this.state.show})
    }    
    //Voucher Open
    handleClickOpen(){
        this.setState({ open: true });
    }
    //Voucher Close
    handleClose(){
        this.setState({ open: false });
    }
    //Voucher Close and Print
    handleCloseAndPrint(){
        var content = document.getElementById('section-to-print').innerHTML;
        var mywindow = window.open('', 'Print', 'height=600,width=800');       
        mywindow.document.write('<html><head><title></title></head>');
        mywindow.document.write('<body >');
        mywindow.document.write(content);
        mywindow.document.write('</body></html>');    
        mywindow.document.close();
        mywindow.focus()
        mywindow.print();
        mywindow.close();
    }

    handleMaxWidthChange = event => {
       this.setState({ maxWidth: event.target.value });
    };     
    handleFullWidthChange = event => {
        this.setState({ fullWidth: event.target.checked });
    };
    
 


    render(){
        const { classes , menuToggle, authUser } = this.props;
        return(
            <div>       

                    <React.Fragment>           
                    <Button variant="fab" color="primary" className={classes.fab} onClick={this.handleClickOpen}>
                        <TouchIcon />
                    </Button>
                    <Dialog
                        fullWidth={this.state.fullWidth}
                        maxWidth={this.state.maxWidth}
                        open={this.state.open}
                        onClose={this.handleClose}          
                        aria-labelledby="max-width-dialog-title"
                        maxHeight={this.state.maxHeight}
                        classes={{ paper: classes.dialogPaper }}
                    >
                    <DialogTitle id="max-width-dialog-title">ကုန်ပစ္စည်အပ်နှံမည်</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        တောင်သူများ၏ ပစ္စည်းအပ်နှံမှုအား မှတ်တမ်းတင်မည်
                        </DialogContentText>
                        <div classes={classes.inputBox}>
                            <Typography variant="subtitle1" gutterBottom align="left">
                                တောင်သူ အမည်
                            </Typography>
                        </div>                          
                       
                       
                        <FormControlLabel
                            className={classes.formControlLabel}
                            control={
                            <Switch
                               // checked={this.state.fullWidth}
                               // onChange={this.handleFullWidthChange}
                                value="fullWidth"
                            />
                            }
                            label="Full width"
                        />
                     </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseAndPrint} color="primary">
                            သိမ်းမည်
                        </Button>
                        <spam className={classes.bpacing}/>
                        <Button onClick={this.handleClose} color="secondary">
                            ပယ်ဖျက်မည်
                        </Button>
                    </DialogActions>
                    </Dialog>

                    {
                        this.state.show && (
                            <div>
                                 
                            </div>    
                        )
                    }
                   </React.Fragment>
                   <div id="section-to-print" style={{display:"none",size:"auto",margin:0}}>
                        <Grid container spacing={0}>
                            <Grid item md={12} align="center" >
                                <Typography variant="h2" style={{color:"green"}}>
                                    ဦးမြင့်
                                </Typography>
                                <Typography variant="subtitle1">
                                     <h3> ပဲမျိုးစုံရောင်း၀ယ်ရေး</h3>
                                     နန်းတော်အနောက်ဘက်၊ ၀န်တော်အိမ်ရပ်၊ အမှတ်(၈)ရပ်ကွက်၊ ရွှေဘိုမြို့။ <br />
                                     <spam></spam> ၀၉-၉၇၅၈၂၅၄၂၅၊ ၀၉-၄၃၁၅၄၅၁၉၊ ၀၉-၂၅၆၅၃၃၈၈၃၊ ၀၉-၉၇၃၂၁၀၂၃၀
                                </Typography>                              
                            </Grid>
                            <Grid item md={12}>
                            <div style={{display: 'flex'}}>
                                <Typography variant="h4">
                                အမည်
                                </Typography>
                                <div style={{flexGrow: 1}} />
                                <Typography variant="h4">
                                နေ့စွဲ -   {dateFns.format(this.state.currentDate,"DD MMM YYYY")}
                                </Typography> 
                            </div>                              
                            </Grid>
                            <Grid item md={12} align="left">
                            <div>
                                <Table style={{ minWidth: 700,minHeight:600,}}>
                                <TableHead>
                                <TableRow>
                                    <TableCell align="left" style={{paddingBottom:'2%',borderBottom: '2px solid green'}}>တင်းရေ</TableCell>
                                    <TableCell align="left" style={{paddingBottom:'2%',borderBottom: '2px solid green'}}>အမျိုးအမည်</TableCell>
                                    <TableCell align="right" style={{paddingBottom:'2%',borderBottom: '2px solid green'}}>နှုန်း</TableCell>
                                    <TableCell align="right"  style={{paddingBottom:'2%',borderBottom: '2px solid green'}}>သင့်ငွေ</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    
                                    {voucherData.map((n,i) => {
                                         console.log(" i and rowLen ", i,"-", rowLen)
                                         if (i === rowLen-1) {
                                            
                                            return (
                                                <TableRow style={{ 'backgroundColor': '#f5f5f5', "height": '35px' }}>
                                                    <TableCell align="left" style={{paddingBottom:'2%',borderBottom: '2px solid green'}}>1</TableCell>
                                                    <TableCell align="left" component="th" scope="row" style={{paddingBottom:'2%',borderBottom: '2px solid green'}}>ပဲ</TableCell>
                                                    <TableCell align="right" style={{paddingBottom:'2%',borderBottom: '2px solid green'}}>၁၀</TableCell>
                                                    <TableCell align="right" style={{paddingBottom:'2%',borderBottom: '2px solid green'}}>၁၀၂၈</TableCell>
                                                </TableRow>
                                            );
                                          } else {
                                            return (
                                                <TableRow style={{ 'backgroundColor': '#f5f5f5', "height": '35px' }}>
                                                    <TableCell align="left">1</TableCell>
                                                    <TableCell align="left" component="th" scope="row">ပဲ</TableCell>
                                                    <TableCell align="right">၁၀</TableCell>
                                                    <TableCell align="right">၁၀၂၈</TableCell>
                                                </TableRow>
                                            );
                                          }
                                       
                                    })}
                                                                  
                                    <TableRow>
                                        <TableCell />
                                        <TableCell />
                                        <TableCell align="center" style={{paddingBottom:'1%',borderBottom: '1px solid green'}}>စုစုပေါင်း</TableCell>
                                        <TableCell align="right" style={{paddingBottom:'1%',borderBottom: '1px solid green'}}>---</TableCell>                                       
                                    </TableRow>
                                    <TableRow>    
                                        <TableCell />
                                        <TableCell />                                 
                                        <TableCell align="center"  style={{paddingBottom:'1%',borderBottom: '1px solid green'}}>စရံငွေ</TableCell>
                                        <TableCell align="right" style={{paddingBottom:'1%',borderBottom: '1px solid green'}}>--</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell />
                                        <TableCell />
                                        <TableCell align="center"  style={{paddingBottom:'1%',borderBottom: '1px solid red'}}>ကျန်ငွေ</TableCell>
                                        <TableCell align="right"  style={{paddingBottom:'1%',borderBottom: '1px solid red'}}>---</TableCell>
                                    </TableRow>
                                </TableBody>
                                </Table>
                                
                               
                            </div>
                            </Grid>
                        </Grid>
                   </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuToggle : state.MenuToggle,
        authUser : state.AuthUser
    };
}

export default connect(mapStateToProps, null)(withStyles(styles)(Icon))