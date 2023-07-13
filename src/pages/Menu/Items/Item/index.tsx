import styles from './Item.module.scss';
import DishTags from 'components/DishTags';
import { Dish } from 'types/Dish';
import { useNavigate } from 'react-router-dom';

export default function Item(
    { id, title, description, photo, size, serving, price, category }: Dish
) {
    const navigate = useNavigate();
    
    return (
        <div className={styles.item} onClick={() => navigate(`/dish/${id}`)}>
            <div className={styles.item__image}>
                <img src={photo} alt={title} />
            </div>
            <div className={styles.item__description}>
                <div className={styles.item__title}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <DishTags category={category} size={size} serving={serving} price={price} title={title} description={description} photo={photo} id={0} />
            </div>
        </div>
    );    
}