"use client"
import styles from './page.module.css';
import React, { useEffect, useState } from "react";

export default function Events() {

    const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const eventsData = [
    {
      eventName: "sample",
      eventDetails: "somethingsomethingsomethingsomethingsomethingsomethingsomethingsomething"
    },
    {
      eventName: "How can I become a member?",
      eventDetails: "TCA accepts a new cohort every quarter. Check out the 'Join' page for more information!"
    },
    {
      eventName: "What majors does TCA accept?",
      eventDetails: "While we are in the process of getting affiliated with the Paul G. Allen School of Computer Science\
              and Engineering, we hire members across every major! TCA has both a tech team and a business teams,\
              so as long as you're interested in joining onr of these groups, we highly encourage you to apply!"
    }
  ];

    return (
        <div className={styles.eventsWrapper.pageMinWidth}>
            <div className={styles.eventsBanner}>
                <img src='/events_banner.png'></img>
                <h1 className={styles.pageMinWidth}>Join Us At Our Next Event?</h1>
            </div>

            <div className={styles.eventTitle}>
              <h1>Upcoming Events</h1>
            </div>
            <div className={styles.eventList}>
                {eventsData.map((item, index) => (
                <div className={styles.eventItem} key={index}>
                    <div className={styles.eventName} onClick={() => handleToggle(index)}>
                        {item.eventName}
                        <span>{activeIndex === index ? '^' : 'v'}</span>
                    </div>
                    <div className={styles.eventDetails + `${activeIndex === index ? 'show' : ''}`}>
                        {item.eventDetails}
                    </div>
                </div>
                ))}
            </div>

        </div>

    )
}