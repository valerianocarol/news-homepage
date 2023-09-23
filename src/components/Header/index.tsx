import React from 'react';
import logo from '../../assets/images/logo.svg'
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" />
            <nav>
                <ul className={styles.navOptions}>
                    <li className={styles.navItem}>
                        <a href="/">Home</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="/">New</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="/">Popular</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="/">Trending</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="/">Categories</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;