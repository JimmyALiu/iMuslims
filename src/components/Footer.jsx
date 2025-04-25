import styles from './Footer.module.css'
import React from 'react'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <img src='/imuslims-logo.png' className={styles.footerLogo} alt='imuslims logo' />
                <h3>Partners</h3>
                <p>Hiya</p>
                <p>SpaceX</p>
                <p>Microsoft</p>
                <p>Liberty Mutual</p>
                <p>Startup</p>
            </div>

            <div>
                <p>Subscribe to stay tuned for our upcoming events!</p>
            </div>

            <div>
                <p>Follow us</p>
            </div>
        </footer>
    )
}
