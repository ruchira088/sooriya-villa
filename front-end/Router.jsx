import React from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import Container from "components/Container";
import Home from "components/sections/Home";
import ContactUs from "components/sections/ContactUs";

const routes =  (
	<Route path="/" component={Container}>
		<IndexRoute title="Home" component={Home}/>
		<Route path="contact-us" title="Contact Us" component={ContactUs}/>
	</Route>
)

export default ({store}) => (
	<Router history={syncHistoryWithStore(browserHistory, store)}>
		{ routes }
	</Router>
)

export {
    routes
}
