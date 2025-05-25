// inform Next.js that this is a client component, meaning it relies on input from the client
// this is to retain the bold style on the current button that is selected when you click on a page
"use client";

import styles from './Header.module.css';
import React from 'react';
import { useEffect } from 'react';
import Navbar from './Navbar'
import Link from 'next/link'
import { headerChangeOnScroll, navBtnChangeOnHover } from '../scripts/HeaderScript'


export default function Header() {
    // attach the header bg color script
    useEffect(() => {
        headerChangeOnScroll();
        navBtnChangeOnHover();
    }, []);

    return (
        <header className={styles.header}>
            <Link className={styles.logoContainer} href='/home'><img src='/imuslims-logo-transparent.png' className={styles.logo} alt='imuslims logo' /></Link>
            <Navbar />
        </header>
    )
}
