import { Dispatch, SetStateAction } from 'react'
import filters from './filters.json'
import styles from './Filters.module.scss'
import classNames from 'classnames'

type IOption = typeof filters[0]

interface FiltersProps {
    filter: number | null,
    setFilter: Dispatch<SetStateAction<number | null>>
}

export default function Filters({ filter, setFilter }: FiltersProps) {

    const selectFilter = (option: IOption) => {
        if (filter === option.id) {
            setFilter(null)
        } else {
            setFilter(option.id)
        }
    }

    return (
        <div className={styles.filters}>
            {filters.map((option) => (
                <button className={classNames({
                    [styles.filters__button]: true,
                    [styles['filters__button--active']]: filter === option.id
                    })} key={option.id} onClick={() => selectFilter(option)}>
                    {option.label}
                </button>
            ))}
        </div>
    )
}