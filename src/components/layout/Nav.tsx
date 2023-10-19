import styles from "./Nav.module.scss";

const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.navList}>
				<li className={styles.menuItem}>
					Bikes
					<ul className={styles.dropdown}>
						<li className={`${styles.navItem} ${styles.navBikeItem}`}>
							Mountain Bikes
						</li>
						<li className={`${styles.navItem} ${styles.navBikeItem}`}>
							Trekking Bikes
						</li>
						<li className={`${styles.navItem} ${styles.navBikeItem}`}>
							Cross Bikes
						</li>
						<li className={`${styles.navItem} ${styles.navBikeItem}`}>
							E-Bikes
						</li>
						<li className={`${styles.navItem} ${styles.navBikeItem}`}>
							City Bikes
						</li>
					</ul>
				</li>

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
export default Nav;
