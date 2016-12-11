import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import configureStore from "reducers/configureStore";
import Router from "home/Router";

const store = configureStore()

ReactDOM.render(
	<Provider store={store}>
		<Router store={store}/>
	</Provider>, 
	document.getElementById("app")
)