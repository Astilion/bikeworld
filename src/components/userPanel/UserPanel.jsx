import styles from "./UserPanel.module.scss";

const UserPanel = props => {
	return (
		<div className={styles.panel}>
			<button>menu</button>
			<button>Search</button>
			<button>Account</button>
			<button>Cart</button>
		</div>
	);
};

export default UserPanel;
