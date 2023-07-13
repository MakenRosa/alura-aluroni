import { Dish } from 'types/Dish';
import styles from './DishTags.module.scss';
import classNames from 'classnames';

export default function DishTags({ category, size, serving, price }: Dish){
    return (
        <div className={styles.tags}>
            <div className={classNames({
                [styles.tags__type]: true,
                [styles[`tags__type__${category.label.toLowerCase()}`]]: true,
            })}>
                {category.label}
            </div>
            <div className={styles.tags__portion}>
                {size}g
            </div>
            <div className={styles.tags__people}>
                {serving} {serving > 1 ? 'people' : 'person'}
            </div>
            <div className={styles.tags__price}>
                        ${price.toFixed(2)}
            </div>
        </div>
    );    
}