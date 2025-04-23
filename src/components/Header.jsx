import styles from './Header.module.css';
import React from 'react';
import Navbar from '../components/Navbar';

export default function Header() {
    return (
        <header className={styles.header}>
            <img src='/circle-logo.png' className={styles.logo} alt='imuslims logo' />
            <Navbar />
        </header>
    )
}
