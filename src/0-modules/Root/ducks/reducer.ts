import { combineReducers } from "redux";
import entryReducer from "../../Main/ducks/reducer";

export default combineReducers({ entries: entryReducer });
