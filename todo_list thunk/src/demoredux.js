import {createStore, combineReducers} from 'redux';

const ADD_PRODUCT = 'products/ADD_PRODUCT';
const ADD_USER = 'users/ADD_USER';

var defaultState = [ 
    {
        name: "Ng van A"
    }
]

function productReducer(state=defaultState, action){
    switch(action.type){
        case ADD_PRODUCT:
            let newSate = [...state, {name: action.text}]
            return newSate;
        default:
            return state;
    }
}

function userReducer(state=defaultState, action){
    switch(action.type){
        case ADD_USER:
            let newSate = [...state, {name: action.text}]
            return newSate;
        default:
            return state;
    }
}

const rootReducer = combineReducers({user: userReducer, product: productReducer})

const store = createStore(rootReducer);

const action = {
    type: ADD_USER,
    text: "NG Van B"
}

store.dispatch(action);