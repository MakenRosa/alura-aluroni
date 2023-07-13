import {ReactComponent as Logo} from 'assets/logo.svg';
import styles from './NavMenu.module.scss';
import { Link } from 'react-router-dom';

export default function NavMenu() {

    const routes = [{
        label: 'Home',
        path: '/'
    }, {
        label: 'Menu',
        path: '/menu'
    }, {
        label: 'About',
        path: '/about'
    }];

    return(
        <nav className={styles.navMenu}>
            <Logo className={styles.navMenu__logo}/>
            <ul className={styles.navMenu__list}>
                {routes.map((route, index) => (
                    <li key={index} className={styles.navMenu__link}>
                        <Link to={route.path}>{route.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );  
}