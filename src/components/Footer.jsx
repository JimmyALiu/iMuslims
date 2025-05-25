import styles from './Footer.module.css'
import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInfo}>
                <div className={styles.logoCol}>
                    <div className={styles.crop}>
                        <img src='/imuslims-white-logo-transparent.png' className={styles.footerLogo} alt='imuslims logo' />
                    </div>
                    <p>Empowering Muslim students to lead, connect, and thrive.</p>
                </div>

                <div className={styles.linkCol}>
                    <h3>Resources</h3>
                    <div>
                        <Link href="https://msauw.org/#section2" target="_blank"><p>Prayer Times</p></Link>
                        <Link href="https://msauw.org/#section2" target="_blank"><p>Campus Prayer Spaces</p></Link>
                    </div>
                </div>

                <div className={styles.linkCol}>
                    <h3>Quick Links</h3>
                    <div>
                        <Link href="/events"><p>Upcoming Events</p></Link>
                        <Link href="/events"><p>Past Events</p></Link>
                        <Link href="/about"><p>Our Board</p></Link>
                        <Link href="/connect"><p>Membership Form</p></Link>
                    </div>
                </div>

                <div className={styles.linkCol}>
                    <h3>Contact us</h3>
                    <div>
                        <div className={styles.email}>
                            <i className="fa-regular fa-envelope"></i>
                            <p>imuslims@uw.edu</p>
                        </div>
                        <div className={styles.socials}>
                            <Link href='https://www.instagram.com/imuslims.uw/'><i className={"fa-brands fa-instagram " + styles.instagram}></i></Link>
                            <Link href='https://www.linkedin.com/company/imuslims-uw/'><i className={"fa-brands fa-linkedin-in " + styles.linkedIn}></i></Link>
                        </div>
                    </div>
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

