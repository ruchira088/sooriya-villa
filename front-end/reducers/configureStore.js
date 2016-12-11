import {createStore, applyMiddleware, combineReducers} from "redux"
import thunkMiddleware from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {routerReducer, routerMiddleware} from "react-router-redux"
import {browserHistory} from "react-router"

export default (initialState = {}) => 
	createStore(
		combineReducers({
			routing: routerReducer
		}),
        initialState,
		composeWithDevTools(
			applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory))
		)
	)