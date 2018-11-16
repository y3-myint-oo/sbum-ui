import { combineReducers } from 'redux';
import { MENU_TOGGLE } from '../actions/';

let setting = {
    menuToggle:false,
}

function MenuToggle( state = [], action ){
    switch(action.type){
        case 'MENU_TOGGLE':   
            setting.menuToggle=action.toggle;         
            return action.toggle;
        default:
            return false;
    }
}
const rootReducer = combineReducers({
    MenuToggle,
})
export default rootReducer;