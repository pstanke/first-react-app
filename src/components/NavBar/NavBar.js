import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
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
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.linkActive : undefined
            }
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.linkActive : undefined
            }
            to='/favorite'
          >
            Favorite
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.linkActive : undefined
            }
            to='/about'
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
