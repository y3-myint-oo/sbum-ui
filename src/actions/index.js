export const MENU_TOGGLE = 'MENU_TOGGLE';

export function changeMenuToggle(toggle){
    const action ={
        type : MENU_TOGGLE,
        toggle
    }
    return action;
}