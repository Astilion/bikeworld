import styles from "./Card.module.scss";

const Card = props => {
	return (
		<div className={styles.card}>
			<div className={styles["img-container"]}>
				<img src={props.url} alt='' />
			</div>
			<div className={styles["text-container"]}>
				<p className={styles["item-name"]}>{props.name}</p>
				<p className={styles.price}>{props.price}</p>
				<p className={styles.description}>{props.description}</p>
			</div>
		</div>
	);
};

export default Card;
