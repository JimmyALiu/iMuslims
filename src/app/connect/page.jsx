import styles from "./page.module.css"
import React from 'react'

export default function Connect() {
    return (
        <section className={styles.connectBody}>
            <div className={styles.bannerContainer}>
                <img src='./connect-banner.jpg'></img>
                <div className={styles.bannerHeader}>
                    <h1>Get Involved With Us!</h1>
                </div>
            </div>
            <div>
                <p>body</p>
            </div>
        </section>
    )
}
