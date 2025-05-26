"use client"
import styles from './page.module.css';
import React, { useEffect, useState } from "react";

export default function Events() {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  

  /* To add new upcoming events create or edit an object in this array. The "eventName" is the title 
  that will be displayed for the event. The "eventDetails" are what is shown when the event is expanded */
  const upcomingEventsData = [
    {
      eventName: "Upcoming Event 1",
      eventDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      eventName: "Upcoming Event 2",
      eventDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      eventName: "Upcoming Event 3",
      eventDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  /* To add more past events create a new object and create the path to the object as the imageURL. 
  All events are dispalyed by default so delete ones that should not be seen. */
  const pastEvents = [
    {
      imageUrl:"/pastEvents/pastEvent1.png"
    },
    {
      imageUrl:"/pastEvents/pastEvent2.png"
    },
    {
      imageUrl:"/pastEvents/pastEvent3.png"
    },
    {
      imageUrl:"/pastEvents/pastEvent1.png"
    },
    {
      imageUrl:"/pastEvents/pastEvent2.png"
    },
    {
      imageUrl:"/pastEvents/pastEvent3.png"
    },
  ];

    return (
        <div className={styles.eventsWrapper.pageMinWidth}>
            <div className={styles.eventsBanner}>
                <img src='/events_banner.png'></img>
                <h1 className={styles.pageMinWidth}>Join Us At Our Next Event?</h1>
            </div>
            <div className={styles.eventTitle}>
            <h1> <img src="/star.png" className={'star ' + styles.starTopLeft}></img>Upcoming Events</h1>
            </div>
            <div className={styles.eventList}>
                {upcomingEventsData.map((item, index) => (
                <div className={styles.eventItem} key={index}>
                    <div className={styles.eventName} onClick={() => handleToggle(index)}>
                        {item.eventName}
                        <div className ={styles.arrows}>
                          <span>{activeIndex === index ? '^' : 'v'}</span>
                        </div>
                    </div>
                    <div className={styles.eventWrapper + `${activeIndex === index ? 'show' : ''}`}>
                      <div className ={styles.eventDetails}>
                          {item.eventDetails}
                      </div>
                    </div>
                </div>
                ))}
            </div>
            <div className={styles.pastEventTitle}>
              <h1><img src="/star.png" className={'star ' + styles.starTopLeft}></img>Past Events</h1>
            </div>
            <div className={styles.pastEvents}>
              {pastEvents.map((item, index) => (
                  <img className={styles.pastEventImage} src={item.imageUrl} key={index}></img>
              ))}
            </div>
        </div>
    )
}