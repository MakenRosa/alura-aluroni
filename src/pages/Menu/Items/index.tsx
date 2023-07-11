import { useEffect, useState } from 'react';
import Item from './Item';
import menu from './items.json';
import styles from './Items.module.scss';

interface ItemsProps {
    search: string;
    filter: number | null;
    orderer: string;
}

export default function Items({search, filter, orderer}: ItemsProps) {
    const [items, setItems] = useState<typeof menu>(menu);

    useEffect(() => {
        let newItems = [...menu];
        newItems = filterAll(newItems, search, filter, orderer);

        setItems(newItems);
    }, [search, filter, orderer]);

    return (
        <div className={styles.items}>
            {items.map((item) => (
                <Item key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    photo={item.photo}
                    size={item.size}
                    serving={item.serving}
                    price={item.price}
                    category={item.category}

                />
            ))}
        </div>
    );
}

const filterAll = ( newItems: typeof menu, search: string, filter: number | null, orderer: string ) => { 
    if (search) {
        newItems = filterSearch(newItems, search);
    }
    if (filter) {
        newItems = filterCategory(newItems, filter);
    }
    if (orderer) {
        newItems = filterOrderer(newItems, orderer);
    }
    return newItems;
};

const filterSearch = ( newItems: typeof menu, search: string ) => {
    return newItems.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
};

const filterCategory = ( newItems: typeof menu, filter: number | null ) => { return newItems.filter((item) => item.category.id === filter); };

const filterOrderer = ( newItems: typeof menu, orderer: string ) => {
    return newItems.sort((a, b) => {
        return orderer === 'price' ? a.price - b.price :
            orderer === 'portion' ? a.size - b.size :
                orderer === 'num_people' ? a.serving - b.serving : 
                    0;
    });
};
