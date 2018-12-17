import { combineReducers } from 'redux';
import { MENU_TOGGLE,AUTH_USER } from '../actions/';

let setting = {
    menuToggle:false,
}

let security = {
    authUser:null,
}

function MenuToggle( state = [], action ){
    switch(action.type){
        case 'MENU_TOGGLE':   
            setting.menuToggle=action.toggle;         
            return action.toggle;
        default:
            return true;
    }
}

function AuthUser( state=[], action ){
    switch(action.type){
        case 'AUTH_USER':
            security.authUser=action.user;
            return action.user;
        default:
            return security.authUser;
    }
} 

const rootReducer = combineReducers({
    MenuToggle,
    AuthUser,
})

export default rootReducer;