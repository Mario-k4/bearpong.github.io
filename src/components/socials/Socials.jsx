import React from 'react'
import "./socials.css"

function Socials() {
    return (
        <div className='socialsWrapper'>
            <ul className="socialItems">
                <li className="socialLink">
                    <a href="https://t.me/+7Av8MJyD5hs3NWU0" target='_blank'>
                        <img src="assets/export/telegram.png" alt="" />
                    </a>
                </li>
                <li className="socialLink">
                    <a href="#">
                        <img src="assets/export/insta.png" alt="" />
                    </a>
                </li>
                <li className="socialLink">
                    <a href="https://x.com/bearpongsol?s=11&t=eneQmqKRrO3Rp3Sqb0axmQ" target='_blank'>
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