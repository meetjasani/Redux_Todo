import contectReducer from "./information"
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    contect: contectReducer,
})
export default rootReducer