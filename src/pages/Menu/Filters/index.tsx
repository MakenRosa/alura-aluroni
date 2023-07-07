import filters from './filters.json'
import styles from './Filters.module.scss'

type IOption = typeof filters[0]

export default function Filters() {

    const selectFilter = (option: IOption) => {
        
    }

    return (
        <div className={styles.filters}>
            {filters.map((option) => (
                <button key={option.id} onClick={() => selectFilter(option)} className={styles.filters__button}>
                    {option.label}
                </button>
            ))}
        </div>
    )
}