import React from 'react'
import "./footer.css"

function Footer() {

    const date = new Date();
    let year = date.getFullYear();
    return (
        <div className='footerWrapper'>
            <span>{year} $BearPong, All Rights Reserved.</span>
        </div>
    )
}

export default Footer