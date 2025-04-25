import styles from './Footer.module.css'
import React from 'react'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInfo}>
                <div>
                    <img src='/imuslims-logo.png' className={styles.footerLogo} alt='imuslims logo' />
                </div>

                <div>
                    <h3>Resources</h3>
                </div>

                <div>
                    <h3>Quick Links</h3>
                </div>

                <div>
                    <h3>Contact us</h3>
                </div>
            </div>
            <hr className={styles.divider} />
            <div className={styles.footerCopyright}>
                <p>Copyright 2025</p>
                <p>All Rights Reserved</p>
            </div>
        </footer>
    )
}

