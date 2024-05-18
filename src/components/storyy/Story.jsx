import React from 'react'
import "./story.css"
import Carousel from '../carousel/Carousel'
import Address from "../address/Address"

function Story() {
    return (
        <>
            <Carousel />
            <div className="storyWrapper" id='story'>
                <div className="storyLeft"></div>
                <div className="storyRight">
                    <div className="storyRightTop">
                        <h2>Bearnomics</h2>
                        <Address copyText={"3swKY5FN4ENQYYJTYqQzGbT7iEv8yD5UngCWfk3fEVA7"} />
                    </div>
                    <div className="storyRightBot">
                        <div className="card cardOne">
                            <div className="cupText">
                                <span className='spanOne'>LIQUIDITY</span>
                                <span className='spanTwo'>BURNED</span>
                            </div>
                        </div>
                        <div className="card cardTwo">
                            <div className="cupText">
                                <span className='spanOne'>CA</span>
                                <span className='spanTwo'>REVOKED</span>
                            </div>
                        </div>
                        <div className="card cardThree">
                            <div className="cupText">
                                <span className='spanOne'>TAXES</span>
                                <span className='spanTwo'>ZERO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel />
        </>
    )
}

export default Story