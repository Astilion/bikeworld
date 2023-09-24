import styles from "./Header.module.scss";

const Header = props => {
    return (
      <header className={styles.header}>
        <h1 className={styles.logo}>BikeWorld</h1>
        <div className={styles.searchBar} >
          <input className={styles.searchInput} type="text" id="search" />
            <button><i class="ti ti-search"></i></button>
        </div>
      </header>
    );
  };
export default Header;
