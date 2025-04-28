import styles from './page.module.css';
import React from 'react'

export default function Home() {
    return (
        <section className={styles.home}>
            <img src="/home-banner.png" className={styles.banner}></img>
            <div className={styles.homeContent}>
                <div className={styles.who}>
                    <div className={styles.whoHeading}>
                        <img src="/star.png" className={'star ' + styles.starTopLeft}></img>
                        <h1>Who are we?</h1>
                    </div>
                    <div className={styles.whoBody}>
                        <p>
                            Our organization is dedicated to providing Muslim students at the iSchool with professional
                            and developmental support while fostering an inclusive environment. We empower Muslim students
                            and allies as information and technology leaders by promoting connection, establishing
                            networks, and building community.
                        </p>
                    </div>
                </div>
                <div className={styles.whoFooter}>
                    {/* TODO Add a link to About page once routing is set up */}
                    <p>Learn More About Us!</p>
                </div>

                <div className={styles.events}>
                    <h1>Upcoming Events</h1>
                    <div className={styles.eventsContainer}>
                        <div className="container">
                            <h2>Kick off Meeting!</h2>
                            <div className={styles.textContainer}>
                                <p>What?</p>
                                <p>When?</p>
                                <p>Where?</p>
                            </div>
                        </div>

                        <div className="container">
                            <h2>Binfo Iftar</h2>
                            <div className={styles.textContainer}>
                                <p>What?</p>
                                <p>When?</p>
                                <p>Where?</p>
                            </div>
                        </div>

                        <div className="container">
                            <h2>Panel</h2>
                            <div className={styles.textContainer}>
                                <p>What?</p>
                                <p>When?</p>
                                <p>Where?</p>
                            </div>
                        </div>

                    </div>
                    <div className={styles.eventsFooter}>
                        {/* TODO Add a link to Events page once routing is set up */}
                        <p>View Full Calendar</p>
                    </div>
                </div>
            </div>
        </section>
    )
}