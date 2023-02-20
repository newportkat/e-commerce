import React from "react"
import { SvgProps } from "../interfaces/interfaces"

function Anchor(props: SvgProps) {
    return (
        <svg
            fill="#fff"
            height="800px"
            width="800px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-415 217 128 128"
            xmlSpace="preserve"
            className={props.style}
        >
            <path d="M-294.5 303.5l-7-25.6-16.9 16.9h6.9c-3.9 17.3-17.1 31.2-34 35.9V265h19v-10.9h-19v-3.6c6.3-2.2 10.9-8.3 10.9-15.3 0-9.1-7.4-16.3-16.3-16.3s-16.3 7.2-16.3 16.3c0 7.1 4.5 13.1 10.9 15.3v3.6h-19V265h19v65.8c-16.8-4.9-30-18.6-34-35.9h6.9l-16.9-16.9-7 25.6 6.7-5c5.8 23.3 25.1 41 48.9 44.6h.9l.8-.1c23.8-3.6 43.2-21.3 49-44.6l6.5 5zm-56.5-73.7c3 0 5.4 2.5 5.4 5.4 0 3-2.5 5.4-5.4 5.4s-5.4-2.5-5.4-5.4c0-2.9 2.4-5.4 5.4-5.4z" />
        </svg>
    )
}

export default Anchor
