import React from "react"
import Carousel from "components/common/Carousel"
import CarouselItem from "components/common/CarouselItem"

import front from "assets/images/front.jpg"

export default () => (
    <Carousel>
        <CarouselItem>
            <img src={front} alt="Front of the house"/>
        </CarouselItem>
        <CarouselItem>
            <div>Item 2</div>
        </CarouselItem>
        <CarouselItem>
            <div>Item 3</div>
        </CarouselItem>
    </Carousel>
)