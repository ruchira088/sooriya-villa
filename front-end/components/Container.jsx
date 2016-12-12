import React from "react"
import Menu from "components/Menu"
import "styles/container"

export default ({children}) => (
    <div className="container">
        <Menu/>
        { children }
    </div>
)