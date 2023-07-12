import styles from './Header.module.scss';

export default function Header () {
    return(
        <header className={styles.header}>
            <div className={styles.header__text}>
                    The House of Code and Dough.
            </div>
        </header>
    );
}