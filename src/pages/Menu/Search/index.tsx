import React, { Dispatch, SetStateAction } from "react";

import styles from './Search.module.scss'
import { CgSearch } from 'react-icons/cg'

interface SearchProps {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
}

export default function Search({search, setSearch} : SearchProps) {
    return (
        <div className={styles.search}>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <CgSearch 
                size={20}
                color='#4C4D5F'
            />
        </div>
    )
}