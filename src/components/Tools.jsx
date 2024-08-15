import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Html from "../assets/html-5-svgrepo-com.svg"
import Css from "../assets/css-3-svgrepo-com.svg"
import Js from "../assets/javascript-svgrepo-com.svg"
import Tw from "../assets/tailwindcss-icon-svgrepo-com.svg"
import Redux from "../assets/redux-svgrepo-com.svg"
import ReactLogo from "../assets/reactjs-svgrepo-com.svg"
import Git from "../assets/git-svgrepo-com.svg"
import Github from "../assets/github-color-svgrepo-com.svg"
import Vercel from "../assets/vercel-svgrepo-com.svg"
import Figma from "../assets/figma-svgrepo-com.svg"


function Tools() {
    const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className="px-8 mb-40">                              
            <h2 className="mb-20 text-lg font-semibold tracking-wide text-center text-gray-200  font-lato">Languages and Technologies</h2>  
                             
            <Slider {...settings}>
                <div><img src={ReactLogo} alt="" className="md:w-20 w-14" /></div>
                <div><img src={Js} alt="" className="md:w-24 w-14 rounded-lg" /></div>
                <div><img src={Tw} alt="" className="md:w-24 w-14" /></div>
                <div><img src={Redux} alt="" className="md:w-24 w-14" /></div>
                <div><img src={Css} alt="" className="md:w-24 w-14" /></div>
                <div><img src={Html} alt="" className="md:w-24 w-14" /></div>
                <div><img src={Figma} alt="" className="md:w-24 w-14" /></div>
                <div><img src={Git} alt="" className="md:w-24 w-14" /></div>
                <div><img src={Github} alt="" className="md:w-24 w-14" /></div>
                <div><img src={Vercel} alt="" className="md:w-32 w-20" /></div>
            </Slider>
        </div>
    )
}

export default Tools
