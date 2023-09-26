import styles from "./Card.module.scss";
import bike from "../../assets/Rower-gorski-OLPRAN-DISCOVERY-29-SHIMANO.jpg";
const Card = props => {
	return (
		<div className={styles.card}>
			<div className={styles["img-container"]}>
				<img src={bike} alt='' />
			</div>
			<div className={styles["text-container"]}>
				<p className={styles["item-name"]}>Mountain bike</p>
				<p className={styles.price}>799$</p>
				<p className={styles.description}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				</p>
			</div>
		</div>
	);
};

export default Card;
