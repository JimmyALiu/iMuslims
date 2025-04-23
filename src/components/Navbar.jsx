import styles from './Navbar.module.css'
import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.button} href='/home'>Home</Link>
            <Link className={styles.button} href='/events'>Events</Link>
            <Link className={styles.button} href='/about'>About</Link>
            <Link className={styles.button} href='/connect'>Connect</Link>
        </nav>
    )
}