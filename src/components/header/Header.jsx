import React from 'react'
import "./header.css"
import Navbar from '../navbar/Navbar'

function Header() {
    return (
        <>
            <Navbar />
            <div className="headerBody">
                <div className='headerWrapper'>
                    <div className="headerTop">
                        <div className="headerTopLeft">
                            <span className='heroText heroLeft'>Bear</span>
                        </div>
                        <div className="headerTopRight">
                            <span className='heroText heroRight'>Pong</span>
                        </div>
                    </div>
                    <div className="headerMiddle">
                        <img src="/assets/BG.png" alt="" />
                    </div>
                    <div className="headerBot">
                        <div className="headerBotLeft">
                            <div className="listings">
                                <a href="https://dexscreener.com/solana/bcdwzyvr73jr6motdwywsjfs3555zypezel9zwwtgxn5" target='_blank'><img src="assets/export/PUMP.png" alt="" /></a>
                                <a href="https://dexscreener.com/solana/bcdwzyvr73jr6motdwywsjfs3555zypezel9zwwtgxn5" target='_blank'><img src="assets/export/radiym.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="headerBotRight">
                            <div className="listings">
                                <a href="https://dexscreener.com/solana/bcdwzyvr73jr6motdwywsjfs3555zypezel9zwwtgxn5" target='_blank'><img src="assets/export/solana.png" target='_blank' alt="" /></a>
                                <a href="https://bear-pong.gitbook.io/bear-pong" target='_blank'><img src="assets/export/gitbook.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <span className='solana'>Powered by Solana</span>
            </div>

        </>
    )
}

export default Header