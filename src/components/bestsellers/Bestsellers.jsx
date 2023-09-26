import styles from "./Bestsellers.module.scss";

import Card from "./Card";
const Bestsellers = props => {
	return (
		<div className={styles.bestsellers}>
			<h2>Bestsellers</h2>
			<div className={styles.carousel}>
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};
export default Bestsellers;
