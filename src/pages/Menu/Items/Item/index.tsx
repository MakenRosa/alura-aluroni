import styles from './Item.module.scss';
import menu from 'data/menu.json';
import classNames from 'classnames';

type ItemProps = typeof menu[0];

export default function Item(
    { title, description, photo:image, size, serving, price, category }: ItemProps
) {
    return (
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.item__description}>
                <div className={styles.item__title}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={classNames({
                        [styles.item__type]: true,
                        [styles[`item__type__${category.label.toLowerCase()}`]]: true,
                    })}>
                        {category.label}
                    </div>
                    <div className={styles.item__portion}>
                        {size}g
                    </div>
                    <div className={styles.item__numPeople}>
                        {serving} {serving > 1 ? 'people' : 'person'}
                    </div>
                    <div className={styles.item__price}>
                        ${price.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    );    
}