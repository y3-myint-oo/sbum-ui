import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withStyles } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { changeMenuToggle } from '../actions';
import { connect }  from 'react-redux';

import Dashboard from './dashboard';
import Warehouse from './warehouse';
import Setting from './setting';
import Supply from './supply';
import Agent from './agent';
import Users from './users';
import Employees from './employee';
import DashboardIcon from '@material-ui/icons/ViewQuilt';
import WarehouseIcon from '@material-ui/icons/StoreMallDirectory';
import SettingIcon from '@material-ui/icons/Settings'
import SupplyIcon from '@material-ui/icons/LocalShipping';
import AgentIcon from '@material-ui/icons/ShoppingCart';
import UsersIcon from '@material-ui/icons/Group';
import EmployIcon from '@material-ui/icons/DirectionsWalk';

const styles = theme => ({
    nav:{
        minHeight:'100vh',         
        [theme.breakpoints.down('sm')]: {
            //backgroundColor: 'red !important',
            minHeight:'150vh',  
        },
    },
});

class Home extends Component{
  constructor(props){
    super(props);
    this.state={
        toggle:false,
    }
    this.handClick = this.handClick.bind(this)
  } 
  handClick(){
      this.setState({toggle:!this.state.toggle})
      this.props.changeMenuToggle(this.state.toggle)
  }
  render() {
    const { classes } = this.props;
    return (        
        <Router>
        <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav className={classes.nav}
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle  onClick={this.handClick}/>
                <SideNav.Nav defaultSelected="dashboard">
                    <NavItem eventKey="dashboard">
                        <NavIcon>
                            <DashboardIcon />
                        </NavIcon>
                        <NavText>
                            Dashboard
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="warehouse">
                        <NavIcon>
                            <WarehouseIcon />
                        </NavIcon>
                        <NavText>
                            Warehouse
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="supply">
                        <NavIcon>
                            <SupplyIcon />
                        </NavIcon>
                        <NavText>
                            Supplyer
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="agent">
                        <NavIcon>
                            <AgentIcon />
                        </NavIcon>
                        <NavText>
                            Agent
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="employees">
                        <NavIcon>
                            <EmployIcon />
                        </NavIcon>
                        <NavText>
                            Employees
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="users">
                        <NavIcon>
                            <UsersIcon />
                        </NavIcon>
                        <NavText>
                            Users
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="setting">
                        <NavIcon>
                            <SettingIcon />
                        </NavIcon>
                        <NavText>
                            Setting
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
                <Route path="/dashboard" exact component={props => <Dashboard />} />
                <Route path="/warehouse" component={props => <Warehouse />} />
                <Route path="/setting" component={props => <Setting />} />
                <Route path="/supply" component={props => <Supply />} />
                <Route path="/agent" component={props => <Agent />} />
                <Route path="/employees" component={props => <Employees />} />
                <Route path="/users" component={props => <Users />} />
            </main>
        </React.Fragment>
        )}
        />
    </Router>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      menuToggle: state.MenuToggle,
    }
}


function mapDispatchToProps(toggle){
    return bindActionCreators( {changeMenuToggle}, toggle) 
}


export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Home));