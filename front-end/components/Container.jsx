import React from "react"

import MenuBar from "./MenuBar.jsx"

export default ({children}) => (
    <div className="container">
        <MenuBar/>
        { children }
    </div>
)