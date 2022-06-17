import React from 'react';
import Slider from 'react-slick';
import { Card, Button } from 'react-bootstrap'
import messi from '../../images/messi.jpg'
import messi2 from '../../images/messi2.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Sliders.css'


const Sliders = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='slider-design container'>
            <h2 className='text-center mt-3 mb-5'>Top Players</h2>
            <Slider {...settings}>


                <div>
                    <img src={messi} alt="" />
                </div>


                <div>
                    <img src={messi} alt="" />
                </div>

                <div>
                    <img src={messi} alt="" />
                </div>

                <div>
                    <img src={messi} alt="" />
                </div>

                <div>
                    <img src={messi} alt="" />
                </div>

                <div>
                    <img src={messi} alt="" />
                </div>

                <div>
                    <img src={messi} alt="" />
                </div>

                <div>
                    <img src={messi} alt="" />
                </div>

                <div>
                    <img src={messi} alt="" />
                </div>
                <div>
                    <img src={messi} alt="" />
                </div>


            </Slider>
        </div>
    );
};

export default Sliders;