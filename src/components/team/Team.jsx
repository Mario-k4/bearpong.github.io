import React from 'react'
import "./team.css"

function Team() {
    return (
        <>
            <div className='teamWrapper' id='team'>
                <h2>Meet The Team</h2>
                <ul className="teamMembers">
                    <li className="member">
                        <img src="assets/bears/loki.png" alt="" />
                        <span>Loki Doge</span>
                    </li>
                    <li className="member">
                        <img src="assets/bears/zaza.png" alt="" />
                        <span>King Zaza</span>
                    </li>
                    <li className="member">
                        <img src="assets/bears/spoder.png" alt="" />
                        <span>Spoderman</span>
                    </li>
                    <li className="member">
                        <img src="assets/bears/king.png" alt="" />
                        <span>BlockDag</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Team