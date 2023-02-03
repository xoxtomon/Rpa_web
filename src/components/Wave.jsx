import React from "react";
import "./wave.css"

function Wave(props) {
    const type = props.orientation;
    if (type) {
        return (
            <svg class="editorial top"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none">
                <defs>
                    <path id="gentle-wave"
                        d="M-160 44c30 0 
        58-18 88-18s
        58 18 88 18 
        58-18 88-18 
        58 18 88 18
        v44h-352z" />
                </defs>
                <g class="parallax">
                    <use xlinkHref="#gentle-wave" x="50" y="0" fill="#232947" />
                    <use xlinkHref="#gentle-wave" x="50" y="3" fill="#282F52" />
                    <use xlinkHref="#gentle-wave" x="50" y="6" fill="#2E365E" />
                </g>
            </svg>

        )

    } else {
        return (
            <svg class="editorial"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none">
                <defs>
                    <path id="gentle-wave"
                        d="M-160 44c30 0 
        58-18 88-18s
        58 18 88 18 
        58-18 88-18 
        58 18 88 18
        v44h-352z" />
                </defs>
                <g class="parallax">
                    <use xlinkHref="#gentle-wave" x="50" y="0" fill="#232947" />
                    <use xlinkHref="#gentle-wave" x="50" y="3" fill="#282F52" />
                    <use xlinkHref="#gentle-wave" x="50" y="6" fill="#2E365E" />
                </g>
            </svg>
        )
    }
}

export default Wave;