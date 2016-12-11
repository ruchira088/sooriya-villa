import React from "react"
import MenuBar from "components/MenuBar"
import "styles/container"

export default ({children}) => (
    <div className="container">
        <MenuBar/>
        { children }
    </div>
)