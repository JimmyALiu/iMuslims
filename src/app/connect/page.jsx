import styles from './page.module.css'
import React from 'react'
import Link from 'next/link'

export default function Connect() {
    const partners = [
        {src: "", alt: ""},
        {src: "", alt: ""},
    ]

    return (
        <section className={styles.connectBody}>
            <div className={styles.bannerContainer}>
                <img src='./connect-banner.jpg'></img>
                <div className={styles.bannerHeader}>
                    <h1>Get Involved With Us!</h1>
                </div>
            </div>
            <div>
                <div className={styles.memberContainer}>
                    <div className={styles.memberHeader}>
                        <img src="/star.png" className={'star ' + styles.eventsStarTopLeft}></img>
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdkvk3rhyuLiNZaOcl3-RcKfBfSGm5n1rK1O29jJkYBXZcLAw/viewform"><h1>Become a Member?</h1></Link>
                        <img src="/star.png" className={'star ' + styles.eventsStarTopRight}></img>
                        <img src="/link-arrow.png" className={styles.linkArrow}></img>
                    </div>
                    <div className={styles.memberContent}>
                        <p>Want to stay in the loop on events and opportunities? Fill out the form to become a member!</p>
                    </div>
                </div>
                <div className={styles.memberContainer}>
                    <div className={styles.memberHeader}>
                        <h1>Our Partners:</h1>
                    </div>
                    <div className={styles.partnerContent}>

                    </div>
                </div>
            </div>
        </section>
    )
}
