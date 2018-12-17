export const MENU_TOGGLE = 'MENU_TOGGLE';
export const AUTH_USER = 'AUTH_USER';

export function changeMenuToggle(toggle){
    const action ={
        type : MENU_TOGGLE,
        toggle
    }
    return action;
}

export function changeAuthUser(user){
    const action ={
        type:AUTH_USER,
        user
    }
    return action;
}