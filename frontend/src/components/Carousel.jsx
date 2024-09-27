import React, { useState } from "react";
import "./About.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import carouselData from "../data/carouselData.json"; // Import the JSON data directly

const Carousel = () => {
	// Remove the props, and use the imported data
	const [slide, setSlide] = useState(0);

	const nextSlide = () => {
		setSlide(slide === carouselData.slides.length - 1 ? 0 : slide + 1);
	};

	const prevSlide = () => {
		setSlide(slide === 0 ? carouselData.slides.length - 1 : slide - 1);
	};

	return (
		<div className="carousel">
			<BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
			{carouselData.slides.map((item, idx) => {
				return (
					<img
						src={item.src} // Access image data from JSON
						alt={item.alt}
						key={idx}
						className={slide === idx ? "slide" : "slide slide-hidden"}
					/>
				);
			})}
			<BsArrowRightCircleFill
				className="arrow arrow-right"
				onClick={nextSlide}
			/>

			<span className="indicators">
				{carouselData.slides.map((_, idx) => {
					return (
						<button
							key={idx}
							onClick={() => setSlide(idx)}
							className={
								slide === idx ? "indicator" : "indicator indicator-inactive"
							}
						></button>
					);
				})}
			</span>
		</div>
	);
};

export default Carousel;
