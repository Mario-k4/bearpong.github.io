import React from 'react'
import "./socials.css"

function Socials() {
    return (
        <div className='socialsWrapper'>
            <ul className="socialItems">
                <li className="socialLink">
                    <a href="#">
                        <img src="assets/export/telegram.png" alt="" />
                    </a>
                </li>
                <li className="socialLink">
                    <a href="#">
                        <img src="assets/export/insta.png" alt="" />
                    </a>
                </li>
                <li className="socialLink">
                    <a href="#">
                        <img src="assets/export/x.png" alt="" />
                    </a>
                </li>
                <li className="socialLink">
                    <a href="#">
                        <img src="assets/export/tiktok.png" alt="" />
                    </a>
                </li>
                <li><span>JOIN US</span></li>
            </ul>
        </div>
    )
}

export default Socials