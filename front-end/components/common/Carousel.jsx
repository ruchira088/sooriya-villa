import React from "react"

export default React.createClass({
    getInitialState() {
      return {
          index: 0
      }
    },
    render() {
        const {children} = this.props
        const {index} = this.state

        return (
            <div className="carousel">
                <div className="carousel-body">
                    { React.Children.toArray(children)[index] }
                </div>
                <div className="carousel-controls">

                </div>
            </div>
        )
    }
})