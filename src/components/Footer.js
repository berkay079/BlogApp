import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Footer.css'
function Footer() {
    return (
        <div className='Footer'>
            <nav class="navbar navbar-light bg-light">
                <div className='FooterContent'>
                    <p>2022 @ Tüm Hakları Saklıdır.</p>
                </div>

                <div>
                    <button className='FooterButton'>L</button>
                    <button className='FooterButton'>T</button>
                    <button className='FooterButton'>I</button>
                    <button className='FooterButton'>F</button>
                </div>
            </nav>
        </div>
    )
}

export default Footer;
