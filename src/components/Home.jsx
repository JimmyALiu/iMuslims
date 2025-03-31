import React from 'react'
import homeBanner from '../../public/home_banner.png'

export default function Home() {
    return (
        <>
            <img src={homeBanner} className='banner'></img>
            <div>
                <h1>Who are we?</h1>
                <div>
                    <p>
                        Our organization is dedicated to providing Muslim students at the iSchool with professional 
                        and developmental support while fostering an inclusive environment. We empower Muslim students 
                        and allies as information and technology leaders by promoting connection, establishing 
                        networks, and building community.
                    </p>
                </div>

                <p>Learn More About Us!</p>

                <h1>Upcoming Events</h1>
                <div>
                    <h2>Kick off Meeting!</h2>
                    <p>What?</p>
                    <p>When?</p>
                    <p>Where?</p>
                </div>

                <div>
                    <h2>Binfo Iftar</h2>
                    <p>What?</p>
                    <p>When?</p>
                    <p>Where?</p>
                </div>

                <div>
                    <h2>Panel</h2>
                    <p>What?</p>
                    <p>When?</p>
                    <p>Where?</p>
                </div>

                <p>View Full Calendar</p>
            </div>
        </>
    )
}