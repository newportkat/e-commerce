import React from "react"
import Facebook from "../svgComponents/Facebook"
import Instagram from "../svgComponents/Instagram"
import TikTok from "../svgComponents/TikTok"
import Twitter from "../svgComponents/Twitter"

const Socials = () => {
    return (
        <div className="flex items-center justify-center gap-2 bg-blue-500 p-4">
            <div className="flex gap-8">
                <Twitter style="h-10 w-10 cursor-pointer transition hover:scale-125" />
                <Instagram style="h-10 w-10 cursor-pointer transition hover:scale-125" />
                <Facebook style="h-10 w-10 cursor-pointer transition hover:scale-125" />
                <TikTok style="h-10 w-10 cursor-pointer transition hover:scale-125" />
            </div>
        </div>
    )
}

export default Socials
