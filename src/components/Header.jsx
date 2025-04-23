import styles from './Header.module.css';
import React from 'react';

export default function Header() {
    return (
        <header className={styles.header}>
            <img src='/circle-logo.png' className={styles.logo} alt='imuslims logo' />
            <div className={styles.navButtons}>
                {/* <button className={page == 'Home' ? 'selected-page' : ''} onClick={() => setPage('Home')}>Home</button>
                <button className={page == 'Events' ? 'selected-page' : ''} onClick={() => setPage('Events')}>Events</button>
                <button className={page == 'About' ? 'selected-page' : ''} onClick={() => setPage('About')}>About</button>
                <button className={page == 'Connect' ? 'selected-page' : ''} onClick={() => setPage('Connect')}>Join Us</button> */}
            </div>
        </header>
    )
}
