import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './dashboard';
import Warehouse from './warehouse';
import { bindActionCreators } from 'redux';
import { changeMenuToggle } from '../actions';
import { connect }  from 'react-redux';

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
    return (
        <Router>
        <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
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
                        <NavIcon></NavIcon>
                        <NavText>
                            Dashboard
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="warehouse">
                        <NavIcon></NavIcon>
                        <NavText>
                            Warehouse
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
                <Route path="/dashboard" exact component={props => <Dashboard />} />
                <Route path="/warehouse" component={props => <Warehouse />} />
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


export default connect(mapStateToProps,mapDispatchToProps)(Home);