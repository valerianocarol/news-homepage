import React from 'react';
import styles from './card.module.css';

interface CardProps {
    image: string;
    number: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ image, number, title, description }) => {
    return (
        <div className={styles.container}>
            <img src={image} alt="img" />
            <div className={styles.content}>
                <h1>{number}</h1>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card;