import styles from './NavBar.module.scss';
const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <div className={styles.icon}>
          <a href='/'>
            <span className={'fa fa-tasks'} />
          </a>
        </div>

        <div className={styles.links}>
          <a href='/'>Home</a>
          <a href='/Favorite'>Favorite</a>
          <a href='/About'>About</a>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
