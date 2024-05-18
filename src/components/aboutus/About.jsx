import React from 'react'
import "./about.css"
import Socials from '../socials/Socials'

function About() {
    return (
        <div className='aboutWrapper' id='about'>
            <div className="aboutLeft">
                <h2>BEAR PONG STORY</h2>
                <span>In the wild woods, a bunch of party-loving bears discovered beer pong and turned it into a legendary event called "Bear pong", where pinecones and
                    honey-filled cups were the stars of the show. Crypto carl, the coolest bear around saw an opportunity and created a meme token on solana to celebrate the forest's
                    hottest party. Now, the bear pong token is the ultimate ticket to the wildest bear-themed fun in the crypto world-so grab your token,toss a pinecone, and join the party!
                </span>
                <Socials />
            </div>
            <div className="aboutRight">
                <img src="assets/export/welcome.png" alt="" />
            </div>
        </div>
    )
}

export default About