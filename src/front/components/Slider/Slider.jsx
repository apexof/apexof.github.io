import React from "react";
import Slider from "react-slick";
import Project from "../Project/Project";
import "./Slider.scss";
import projects from "../../projects-data/projects";

function SliderProjects() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        lazyLoad: "ondemand"
    };
    const list = projects.map(p => (
        <Project
            key={p.id}
            title={p.title}
            text={p.text}
            tags={p.tags}
            img={p.img}
            url={p.url}
        />
    ));
    const style = `
    .slick-dots li button:before {
        color: white;
    }
    .slick-dots li.slick-active button:before {
        color: white;
    }
    `;
    return (
        <div cx="slider-container">
            <style>
                {style}
            </style>
            <Slider {...settings}>
                {list}
            </Slider>
        </div>
    );
}
export default SliderProjects;
