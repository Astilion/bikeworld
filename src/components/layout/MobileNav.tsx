import { useState } from "react";
import styles from "./MobileNav.module.scss";

const MobileNav = props => {
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);

	const menuItemClickHandler = () => {
		setIsDropdownVisible(!isDropdownVisible);
	};
	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				<li className={styles.menuItem} onClick={menuItemClickHandler}>
					Bikes
				</li>
				{isDropdownVisible && (
					<>
						<li className={styles.navItem}>Mountain Bikes</li>
						<li className={styles.navItem}>Trekking Bikes</li>
						<li className={styles.navItem}>Cross Bikes</li>
						<li className={styles.navItem}>E-Bikes</li>
						<li className={styles.navItem}>City Bikes</li>
					</>
				)}

				<li className={styles.navItem}>
					<a>Accesories</a>
				</li>
				<li className={styles.navItem}>
					<a>Clothes & Shoes</a>
				</li>
				<li className={styles.navItem}>
					<a>Tools</a>
				</li>
				<li className={styles.navItem}>
					<a>Bestsellers</a>
				</li>
				<li className={styles.navItem}>
					<a>Contact</a>
				</li>
			</ul>
		</nav>
	);
};
export default MobileNav;
