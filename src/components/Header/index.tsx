import { memo } from 'react';
import styles from './Header.module.scss';

function Header () {
    return(
        <header className={styles.header}>
            <div className={styles.header__text}>
                    The House of Code and Dough.
            </div>
        </header>
    );
}

export default memo(Header);