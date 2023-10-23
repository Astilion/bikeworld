import { useRef, useEffect, useState } from "react";
import Card from "./Card";
import SliderControls from "./SliderControls";
import styles from "./Slider.module.scss";

import bike1 from "../../assets/Rower-Cube-AIM-RACE-29-2023-black-20.jpg";
import bike2 from "../../assets/Rower-gorski-OLPRAN-DISCOVERY-29-SHIMANO.jpg";
import bike3 from "../../assets/Rower-gorski.jpg";
import bike4 from "../../assets/WYGODNE-SIODELKO-ROWEROWE-SPORTOWE-PIANKA-MIEKKIE.jpg";
import bike5 from "../../assets/KLAMKOMANETKA-SHIMANO-Acera-STEF-500-3x7.jpg";

type SlideData = {
	id: number;
	name: string;
	price: string;
	description: string;
	url: string;
};

const slideData: SlideData[] = [
	{
		id: 1,
		name: "Mountain bike 1",
		price: "799$",
		description: "Lorem ipsum...",
		url: bike1,
	},
	{
		id: 2,
		name: "Mountain bike 2",
		price: "799$",
		description: "Lorem ipsum...",
		url: bike2,
	},
	{
		id: 3,
		name: "Mountain bike 3",
		price: "799$",
		description: "Lorem ipsum...",
		url: bike3,
	},
	{
		id: 4,
		name: "saddle",
		price: "39$",
		description: "Lorem ipsum...",
		url: bike4,
	},
	{
		id: 5,
		name: "Shifters",
		price: "79$",
		description: "Lorem ipsum...",
		url: bike5,
	},
	{
		id: 6,
		name: "saddle",
		price: "39$",
		description: "Lorem ipsum...",
		url: bike4,
	},
	{
		id: 7,
		name: "Shifters",
		price: "79$",
		description: "Lorem ipsum...",
		url: bike5,
	},
	{
		id: 8,
		name: "saddle",
		price: "39$",
		description: "Lorem ipsum...",
		url: bike4,
	},
	{
		id: 9,
		name: "Shifters",
		price: "79$",
		description: "Lorem ipsum...",
		url: bike5,
	},
	{
		id: 10,
		name: "saddle",
		price: "39$",
		description: "Lorem ipsum...",
		url: bike4,
	},
	{
		id: 11,
		name: "Shifters",
		price: "79$",
		description: "Lorem ipsum...",
		url: bike5,
	},
];
const Slider = () => {
	const carouselRef = useRef<HTMLDivElement | null>(null);
	const [isDragging, setIsDragging] =useState(false)
	const [startX, setStartX] = useState(0);

	const cardWidth = 256 + 10;
	const cardsToScroll = 1;

	const handleStart = (e: TouchEvent) => {
		setIsDragging(true);
		setStartX(e.touches[0].clientX);
	};

	const handleMove = (e: TouchEvent) => {
		if (!isDragging) return;
		const x = e.touches[0].clientX;
		const walk = (x - startX) * 20;
		if (carouselRef.current) {
			carouselRef.current.scrollLeft -= walk;
		}
		setStartX(x)
	};

	const handleEnd = () => {
		setIsDragging(false)
	};

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.ontouchstart = handleStart;
			carouselRef.current.ontouchmove = handleMove;
			carouselRef.current.ontouchend = handleEnd;
		}

		return () => {
			if (carouselRef.current) {
				carouselRef.current.ontouchstart = null;
				carouselRef.current.ontouchmove = null;
				carouselRef.current.ontouchend = null;
			}
		};
	}, []);

	const prev = () => {
		const box = carouselRef.current;
		if (box) {
			if (box.scrollLeft === 0) {
				box.scrollLeft = box.scrollWidth;
			} else {
				box.scrollLeft = box.scrollLeft - cardWidth * cardsToScroll;
			}
		}
	};

	const next = () => {
		const box = carouselRef.current;
		if (box) {
			if (box.scrollLeft >= box.scrollWidth - box.clientWidth) {
				box.scrollLeft = 0;
			} else {
				box.scrollLeft = box.scrollLeft + cardWidth * cardsToScroll;
			}
		}
	};

	const carousel = (
		<div className={styles.carousel} ref={carouselRef}>
			{slideData.map(card => (
				<Card
					key={card.id}
					name={card.name}
					price={card.price}
					description={card.description}
					url={card.url}
				/>
			))}
		</div>
	);

	return (
		<div className={styles.slider}>
			{carousel}
			<SliderControls onPrevClick={prev} onNextClick={next}/>
		</div>
	);
};
export default Slider;
