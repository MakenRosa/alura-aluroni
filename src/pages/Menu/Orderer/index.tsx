import styles from './Orderer.module.scss';
import options from './options.json';
import React, { memo, useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp } from 'react-icons/md';

interface OrdererProps { 
  orderer: string,
  setOrderer: React.Dispatch<React.SetStateAction<string>>
}

function Orderer({
    orderer,
    setOrderer
}: OrdererProps) {
    const [isOpen, setIsOpen] = useState(false);
    const ordererName = orderer && options.find(option => option.value === orderer)?.name;
    return (
        <button
            className={classNames({
                [styles.orderer]: true,
                [styles['orderer--active']]: orderer !== ''
            })}
            onClick={() => setIsOpen(!isOpen)}
            onBlur={() => setIsOpen(false)}
        >
            <span>{ordererName || 'Order By'}</span>
            {/* {isOpen ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} /> } */}
            <MdKeyboardArrowUp size={20} style={{transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}} />
            <div className={classNames({
                [styles.orderer__options]: true,
                [styles['orderer__options--active']]: isOpen
            })}>
                {options.map(option => (
                    <div className={styles.orderer__option} key={option.value} onClick={() => setOrderer(option.value)}>
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    );
}

export default memo(Orderer);