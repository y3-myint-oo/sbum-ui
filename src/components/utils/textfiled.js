import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core';
//Myanmar Font
import myanmar from 'myanmar-tools';
const detector = new myanmar.ZawgyiDetector();
const converter = new myanmar.ZawgyiConverter();
//const converter.unicodeToZawgyi


const styles = theme => ({
    nav:{
        minHeight:'100vh',         
        [theme.breakpoints.down('sm')]: {
            //backgroundColor: 'red !important',
            minHeight:'150vh',  
        },
    },
});

class MMTextField extends Component{
    constructor(props){
        super(props);
        this.state={
            text:"",
        }
        this.handleFont = this.handleFont.bind(this)
    } 
    handleFont(event){
       
        let score = detector.getZawgyiProbability(event.target.value)

        let puretext = event.target.value
        console.log(" ---- Score ----- ", score)


        if ( score > 0.9){
            console.log(" ---- Input Font ----- Zaw Gyi")
            puretext = converter.zawgyiToUnicode(event.target.value)
        }else {
            console.log(" ---- Input Font ----- UniCode")
        }
        
        console.log(" ---- MM ZawGyi -> Unicode converted ---- ", puretext);
        this.setState({text: puretext});
    }
    render(){
        return(
            <TextField
                onChange={this.handleFont}
                type="text"
                name="text"
                placeholder=""
                value={this.state.text}
            />
        )
    }
}
export default withStyles(styles)(MMTextField);