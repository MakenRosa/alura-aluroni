import styles from './Menu.module.scss'
import {ReactComponent as Logo} from 'assets/logo.svg'
import Search from './Search'
import { useState } from 'react'
import Filters from './Filters'
import Items from './Items'
import Orderer from './Orderer'


export default function Menu() {
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState<number | null>(null)
    const [orderer, setOrderer] = useState('')
    return(
        <main>
            <nav className={styles.navbar}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    The House of Code and Dough.
                </div>
            </header>
            <section className={styles.menu}>
                <h3 className={styles.menu__title}>Menu</h3>
                <Search search={search} setSearch={setSearch}/>
                <div className={styles.menu__filters}>
                    <Filters filter={filter} setFilter={setFilter}/>
                    <Orderer orderer={orderer} setOrderer={setOrderer}/>
                </div>
                <Items search={search} filter={filter} orderer={orderer}/>
            </section>
        </main>
    )
}