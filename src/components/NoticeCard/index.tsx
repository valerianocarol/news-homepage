import React from 'react';
import styles from './noticeCard.module.css';

interface NoticeCardProp {
    title: string;
    description: string;
}

const NoticeCard: React.FC<NoticeCardProp> = ({ title, description }) => {
    return (
        <div className={styles.container}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default NoticeCard;