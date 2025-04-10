import imuslimsLogo from '../../public/circle-logo.png'
import React from 'react'

export default function Header(props) {
    const { page, setPage } = props
    return (
        <header>
            <img src={imuslimsLogo} className='logo' alt='imuslims logo' />
            <div className='nav-buttons'>
                <button className={page == 'Home' ? 'selected-page' : ''} onClick={() => setPage('Home')}>Home</button>
                <button className={page == 'Events' ? 'selected-page' : ''} onClick={() => setPage('Events')}>Events</button>
                <button className={page == 'About' ? 'selected-page' : ''} onClick={() => setPage('About')}>About</button>
                <button className={page == 'Connect' ? 'selected-page' : ''} onClick={() => setPage('Connect')}>Join Us</button>
            </div>
        </header>
    )
}
