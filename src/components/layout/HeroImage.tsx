import styles from "./HeroImg.module.scss";
import heroJpg from "../../assets/hero-img.jpg";
const HeroImg = () => {
	return (
		<div className={styles["main-image"]}>
			<img src={heroJpg} alt='Bikes room' />
			<div className={styles.shadow}></div>
			<div className={styles.text}>
				<h2>BikeWorld</h2>
				<p>Favourite place for bike lovers!</p>
			</div>
		</div>
	);
};

export default HeroImg;
