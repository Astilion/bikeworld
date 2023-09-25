import styles from "./Header.module.scss";

const Header = props => {
	const isShown = props.isShown;
	return (
		<>
			<header className={styles.header}>
				<h1 className={styles.logo}>BikeWorld</h1>
				<div className={styles.searchBar}>
					<input className={styles.searchInput} type='text' id='search' />
					<button>
						<i class='ti ti-search'></i>
					</button>
				</div>
				{isShown ? (
					<div className={styles.sideContainer}>
						<button>
							<i class='ti ti-user-hexagon'></i>
						</button>
						<button>
							<i class='ti ti-shopping-cart'></i>
						</button>
					</div>
				) : null}
			</header>
			<nav className={styles.nav}></nav>
			<div className='hero'>
				<div className='hero__img'></div>
				<div className='hero__shadow'></div>
				<div className='hero__text'></div>
			</div>
		</>
	);
};
export default Header;
