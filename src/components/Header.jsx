import imuslimsLogo from '../../public/imuslims-logo.png'
import React from 'react'

export default function Header(props) {
    const { page, setPage } = props
    return (
        <header>
            <img src={imuslimsLogo} className='logo' alt='imuslims logo' />
            <div className='navButtons'>
                <button className={page == 'Home' ? 'selectedPage' : ''} onClick={() => setPage('Home')}>Home</button>
                <button className={page == 'Events' ? 'selectedPage' : ''} onClick={() => setPage('Events')}>Events</button>
                <button className={page == 'About' ? 'selectedPage' : ''} onClick={() => setPage('About')}>About Us</button>
                <button className={page == 'Connect' ? 'selectedPage' : ''} onClick={() => setPage('Connect')}>Let's Connect</button>
            </div>
        </header>
    )
}
