import styles from "./Bestsellers.module.scss";
import Slider from "./Slider";

const Bestsellers = () => {
	return (
		<div className={styles.bestsellers}>
			<h2>Bestsellers</h2>
			<Slider />
		</div>
	);
};
export default Bestsellers;
