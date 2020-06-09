import {combineReducers} from "redux";
import productGetSize from "./get";
import productSearchSize from "./search";
import productShow from "./show";
import productCart from "./cart";

const myReducer = combineReducers({
    productGetSize,
    productSearchSize,
    productShow,
    productCart
})

export default myReducer