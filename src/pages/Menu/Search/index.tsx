import { Dispatch, SetStateAction, memo, useMemo } from 'react';
import styles from './Search.module.scss';
import { CgSearch } from 'react-icons/cg';

interface SearchProps {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
}

function Search({search, setSearch} : SearchProps) {

    const memoizedIcon = useMemo(() => <CgSearch size={20} color='#4C4D5F' />, []);

    return (
        <div className={styles.search}>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {memoizedIcon}
        </div>
    );
}

export default memo(Search);