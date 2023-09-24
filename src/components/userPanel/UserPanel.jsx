import styles from "./UserPanel.module.scss";

const UserPanel = props => {
	return (
		<div className={styles.panel}>
			<button><i class="ti ti-menu-2"></i></button>
			<button><i class="ti ti-search"></i></button>
			<button><i class="ti ti-user-hexagon"></i></button>
			<button><i class="ti ti-shopping-cart"></i></button>
		</div>
	);
};

export default UserPanel;
