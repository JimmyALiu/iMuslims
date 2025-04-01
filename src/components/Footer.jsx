import React from 'react'
import imuslimsLogo from '../../public/imuslims-logo.png'

export default function Footer() {
    return (
        <footer>
            <div>
                <img src={imuslimsLogo} className='footer-logo' alt='imuslims logo' />
                <h3>Partners</h3>
                <p>Hiya</p>
                <p>SpaceX</p>
                <p>Microsoft</p>
                <p>Liberty Mutual</p>
                <p>Startup</p>
            </div>

            <div>
                <p>Subscribe to stay tuned for our upcoming events!</p>
            </div>

            <div>
                <p>Follow us</p>
            </div>
        </footer>
    )
}
