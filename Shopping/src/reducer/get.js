
import * as types from "../constant";

var initialState = ["XS","S","M","ML","L","XL","XLL"];

var myReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.GET_SIZE:
            return state
        default: 
            return state
    }
}

export default myReducer