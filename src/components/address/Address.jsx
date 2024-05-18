import React from 'react'
import { useState } from 'react';
import "./address.css"

function Address({ copyText }) {
    const [isCopied, setIsCopied] = useState(false);

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    const handleCopyClick = () => {
        copyTextToClipboard(copyText)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className='caAddress'>
            <input className='caInput' type="text" value={copyText} readOnly />
            <button className='copyBtn' onClick={handleCopyClick}>
                <span>{isCopied ? "Successfully copied" : <img src="assets/icons/COPY.png" alt="" />}</span>
            </button>
        </div>
    );
}

export default Address