import styles from "./UserPanel.module.scss";

const UserPanel = props => {
	const navHandler = () => {
		props.onShowNav();
	}
	return (
		<div className={styles.panel}>
			<button onClick={navHandler}><i className="ti ti-menu-2"></i></button>
			<button><i className="ti ti-search"></i></button>
			<button><i className="ti ti-user-hexagon"></i></button>
			<button><i className="ti ti-shopping-cart"></i></button>
		</div>
	);
};

export default UserPanel;
