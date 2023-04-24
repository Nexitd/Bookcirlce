import { Carousel } from "antd";
import React, { ReactNode, RefObject } from "react";
import { CarouselRef } from "antd/lib/carousel";


type CustomSliderPropsType = {
    slidesToShow?: number;
    children: ReactNode
}

const LeftBtn = ({ onClick }: { onClick: () => void }) => {
    return <button className="slider__btn" onClick={onClick}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z" fill="#222222" />
        </svg>
    </button>
}

const RightBtn = ({ onClick }: { onClick: () => void }) => {
    return <button className="slider__btn" onClick={onClick}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.3536 1.64645C11.5488 1.84171 11.5488 2.15829 11.3536 2.35355L5.70711 8L11.3536 13.6464C11.5488 13.8417 11.5488 14.1583 11.3536 14.3536C11.1583 14.5488 10.8417 14.5488 10.6464 14.3536L4.64645 8.35355C4.45118 8.15829 4.45118 7.84171 4.64645 7.64645L10.6464 1.64645C10.8417 1.45118 11.1583 1.45118 11.3536 1.64645Z" fill="#222222" />
        </svg>
    </button>
}


const CustomSlider = ({ slidesToShow = 2, children }: CustomSliderPropsType) => {
    const carousel: RefObject<CarouselRef> = React.createRef();

    const next = () => {
        carousel.current?.next();
    };

    const previous = () => {
        carousel.current?.prev();
    };

    return <div className="slider">
        <RightBtn onClick={previous} />
        <div className="slider__container">
            <Carousel
                infinite={true}
                ref={carousel}
                dots={false}
                slidesToScroll={1}
                slidesToShow={slidesToShow}
            >
                {children}
            </Carousel>
        </div>
        <LeftBtn onClick={next} />
    </div>



}

export default CustomSlider;