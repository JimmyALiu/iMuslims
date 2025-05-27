"use client";
import styles from './page.module.css';
import React, { useRef, useState } from "react";

import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';

// define url builder
const builder = imageUrlBuilder(client);

export default async function Events() {
  // await on sanity for posters
  const posters = await getPosters();

  const [activeIndex, setActiveIndex] = useState(null);
  const panelRefs = useRef([]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  /* To add new upcoming events create or edit an object in this array. The "eventName" is the title 
  that will be displayed for the event. The "eventDetails" are what is shown when the event is expanded */
  const upcomingEventsData = [
    {
      eventName: "Upcoming Event 1",
      eventDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      eventName: "Upcoming Event 2",
      eventDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      eventName: "Upcoming Event 3",
      eventDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  /* To add more past events create a new object and create the path to the object as the "imageURL". 
  All events are dispalyed by default so delete ones that should not be seen. */
  const pastEvents = [
    { imageUrl: "/pastEvents/pastEvent1.png" },
    { imageUrl: "/pastEvents/pastEvent2.png" },
    { imageUrl: "/pastEvents/pastEvent3.png" },
    { imageUrl: "/pastEvents/pastEvent1.png" },
    { imageUrl: "/pastEvents/pastEvent2.png" },
    { imageUrl: "/pastEvents/pastEvent3.png" },
    { imageUrl: "/pastEvents/pastEvent1.png" },
    { imageUrl: "/pastEvents/pastEvent2.png" },
    { imageUrl: "/pastEvents/pastEvent3.png" },
  ];

  return (
    <div className={styles.eventsWrapper.pageMinWidth}>
      <div className={styles.eventsBanner}>
        <img src="/events_banner.png" alt="Events Banner"/>
        <div className={styles.purpleBackground}></div>
        <h1 className={styles.pageMinWidth}>Join Us At Our Next Event?</h1>
      </div>

      <div className={styles.eventTitle}>
        <h1>
          <img
            src="/decorations/star.png"
            className={'star ' + styles.starTopLeft}
            alt="Star decoration"
          />
          Upcoming Events
        </h1>
      </div>
      <div className={styles.eventList}>
        {upcomingEventsData.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div className={styles.eventItem} key={index}>
              <div
                className={styles.eventName}
                onClick={() => handleToggle(index)}
              >
                {item.eventName}
                <div className={styles.arrows}>
                  <span>
                    <img
                      src={`/decorations/${isActive ? "/upArrow.png" : "/downArrow.png"}`}
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div
                ref={(el) => (panelRefs.current[index] = el)}
                className={`${styles.eventWrapper} ${isActive ? styles.show : ""}`}
                /* note that this way of doing the accordion menus scales with pixels and not with percentage*/
                style={{
                  maxHeight: isActive
                    ? `${panelRefs.current[index]?.scrollHeight}px`
                    : "0px" 
                }}
              >
                <div className={styles.eventDetails}>{item.eventDetails}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.pastEventTitle}>
        <h1>
          <img
            src="/decorations/star.png"
            className={'star ' + styles.starTopLeft}
            alt="Star decoration"
          />
          Past Events
        </h1>
      </div>
      <div className={styles.pastEvents}>
        <div className ={styles.scrollerWrapper}>
          <div className={styles.scrollerContent}>
        {posters.map((item, index) => (
           <img
            className={styles.pastEventImage}
            src={urlFor(item.image).url()}
            alt={item.name}
            key={index}
          />
        ))}
        </div>  
        </div>
      </div>
    </div>
  );
}


async function getPosters() {
  const query = `*[_type == "poster"] | order(index asc) {
    index,
    name,
    image,
  }`

  const posts = await client.fetch(query);
  return posts;
}

function urlFor(src) {
  return builder.image(src);
}