import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/image/image-1.jpg'
import img2 from '../assets/image/image-2.jpg'
import img3 from '../assets/image/image-3.jpg'
import img4 from '../assets/image/image-4.jpg'

// Example images — place them in /public or import from assets
const images = [
    img1, img2, img3, img4
];

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
    };

    return (
        <div className="w-full max-w-3xl mx-auto mt-1  overflow-hidden shadow-lg">
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index}>
                        <img src={src} alt={`slide-${index}`} className="w-full h-100 object-cover" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
