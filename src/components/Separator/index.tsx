import React from 'react';
import styles from './separator.module.css';

const Separator: React.FC = () => {
    return (
        <hr className={styles.linha} />
    );
};

export default Separator;