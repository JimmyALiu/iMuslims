import React from 'react'
import star from '../../public/star.png'
import homeBanner from '../../public/home-banner.png'

export default function Home() {
    return (
        <section className='home'>
            <img src={homeBanner} className='banner'></img>
            <div className='home-content'>
                <div className='who'>
                    <div className='who-heading'>
                        <img src={star} className='star star-top-left'></img>
                        <h1>Who are we?</h1>
                        <img src={star} className='star star-bot-right'></img>
                    </div>
                    <div className='container'>
                        <p>
                            Our organization is dedicated to providing Muslim students at the iSchool with professional
                            and developmental support while fostering an inclusive environment. We empower Muslim students
                            and allies as information and technology leaders by promoting connection, establishing
                            networks, and building community.
                        </p>
                    </div>
                </div>
                <div className='who-footer'>
                    {/* TODO Add a link to About page once routing is set up */}
                    <p>Learn More About Us!</p>
                </div>

                <div className='events'>
                    <h1>Upcoming Events</h1>
                    <div className='events-container'>
                        <div className='container'>
                            <h2>Kick off Meeting!</h2>
                            <div className='text-container'>
                                <p>What?</p>
                                <p>When?</p>
                                <p>Where?</p>
                            </div>
                        </div>

                        <div className='container'>
                            <h2>Binfo Iftar</h2>
                            <div className='text-container'>
                                <p>What?</p>
                                <p>When?</p>
                                <p>Where?</p>
                            </div>
                        </div>

                        <div className='container'>
                            <h2>Panel</h2>
                            <div className='text-container'>
                                <p>What?</p>
                                <p>When?</p>
                                <p>Where?</p>
                            </div>
                        </div>

                    </div>
                    <div className='events-footer'>
                        {/* TODO Add a link to Events page once routing is set up */}
                        <p>View Full Calendar</p>
                    </div>
                </div>
            </div>
        </section>
    )
}