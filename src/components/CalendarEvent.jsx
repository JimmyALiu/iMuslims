import styles from './CalendarEvent.module.css'
import React from 'react'

export default function CalendarEvent(props) {
    const { eventName, description, date, time, location } = props;
    return (
        <div className={styles.calendarContainer}>
            <div className={styles.eventNameContainer}>
                <h3 className={styles.eventName}>{eventName}</h3>
            </div>
            <div className={styles.eventInfoContainer}>
                <p className={styles.description}>{description}</p>
                <div>
                    <p>Date: {date}</p>
                    <p>Time: {time}</p>
                    <p>Location: {location}</p>
                </div>
            </div>
        </div>
    )
}
