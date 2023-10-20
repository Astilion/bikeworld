import { useRef } from "react";
import Card from "./Card";
import styles from "./Slider.module.scss";
import bike1 from "../../assets/Rower-Cube-AIM-RACE-29-2023-black-20.jpg";
import bike2 from "../../assets/Rower-gorski-OLPRAN-DISCOVERY-29-SHIMANO.jpg";
import bike3 from "../../assets/Rower-gorski.jpg";
import bike4 from "../../assets/WYGODNE-SIODELKO-ROWEROWE-SPORTOWE-PIANKA-MIEKKIE.jpg";
import bike5 from "../../assets/KLAMKOMANETKA-SHIMANO-Acera-STEF-500-3x7.jpg";

const slideData = [
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

	const cardWidth = 256 + 10; // Width of a single card
	const cardsToScroll = 3; // Number of cards to scroll at a time
	
	const prev = () => {
	  const box = carouselRef.current;
	  if (box) {
		box.scrollLeft = box.scrollLeft - cardWidth * cardsToScroll; // Move back by the width of three cards
	  }
	};
	
	const next = () => {
	  const box = carouselRef.current;
	  if (box) {
		box.scrollLeft = box.scrollLeft + cardWidth * cardsToScroll; // Move forward by the width of three cards
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
			<button className={styles.prevButton} onClick={prev}>
				Prev
			</button>
			{carousel}
			<button className={styles.nextButton} onClick={next}>
				Next
			</button>
		</div>
	);
};
export default Slider;
