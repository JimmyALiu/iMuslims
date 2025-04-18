import "../styles/Events.css"
import React from 'react'
import eventsBanner from '../../public/events_banner.png'

export default function Events() {
    return (
        <div className='events-wrapper page-min-width'>
            <div className='events-banner'>
                <img src={eventsBanner}></img>
                <h1 className='page-min-width'>Join Us At Our Next Event?</h1>
            </div>
        </div>
    )
}
