import { LOGIN_USER } from '../types/userTypes'

interface ActionInterface{
    type : string,
    payload : any
}

interface StateInitiale{
    response : any
}

let initState:StateInitiale = {
    response : {}
}

export function userReducer(state:StateInitiale = initState ,action:ActionInterface){
    switch(action.type){
        case LOGIN_USER : {
            return {
                ...state,
                response : action.payload
              };
        }
        default:
            return state
    }
    
}