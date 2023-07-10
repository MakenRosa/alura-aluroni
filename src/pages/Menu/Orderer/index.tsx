import styles from "./Orderer.module.scss";
import options from "./options.json";
import React, { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface OrdererProps { 
  orderer: string,
  setOrderer: React.Dispatch<React.SetStateAction<string>>
}

export default function Orderer({
  orderer,
  setOrderer
}: OrdererProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ordererName = orderer && options.find(option => option.value === orderer)?.name;
  return (
    <button
      className={classNames({
        [styles.orderer]: true,
        [styles["orderer--active"]]: orderer !== ""
      })}
      onClick={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
    >
      <span>{ordererName || "Order By"}</span>
      {isOpen ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} /> }
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
  )
}