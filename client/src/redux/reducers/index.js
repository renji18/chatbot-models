import { combineReducers } from "redux"
import {userData} from "./userReducer"

const rootReducer = combineReducers({
  message: userData,
})

export default rootReducer
