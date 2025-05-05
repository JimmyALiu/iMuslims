import styles from './CalendarEvent.module.css'
import React from 'react'

export default function CalendarEvent(props) {
    const { eventName, date, description } = props;
    return (
        <div className={styles.calendarContainer}>
            <div>
                <h3>{eventName}</h3>
                <p>{date}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}
