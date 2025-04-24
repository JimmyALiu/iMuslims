// inform Next.js that this is a client component, meaning it relies on input from the client
// this is to retain the bold style on the current button that is selected when you click on a page
"use client";

import styles from './Header.module.css';
import React from 'react';
import { useState } from 'react';
import Navbar from

'../components/Navbar';

export default function Header() {
    // will either be in the state: 'home', 'events', 'about', or 'connect'
    const [page, setPage] = useState('home');

    return (
        <header className={styles.header}>
            <img src='/imuslims-logo.png' className={styles.logo} alt='imuslims logo' />
            <Navbar page={page} setPage={setPage} />
        </header>
    )
}
