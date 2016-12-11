import React from "react"
import {Link} from "react-router"

import {routes} from "../Router.jsx"

export default () => (
    <div className="menu">
        {
            React.Children.map(routes.props.children,
                ({props: {title = "unspecified", path = "/"}}, index) => (
                    <div className="menu-item" key={index}>
                        <Link to={path}>
                            {title}
                        </Link>
                    </div>
                )
            )
        }
    </div>
)