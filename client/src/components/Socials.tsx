import React from "react"
import { ReactComponent as Facebook } from "../assets/facebook.svg"
import { ReactComponent as Instagram } from "../assets/instagram.svg"
import { ReactComponent as TikTok } from "../assets/tik-tok.svg"
import { ReactComponent as Twitter } from "../assets/twitter.svg"

const Socials = () => {
    return (
        <div className="flex items-center justify-center gap-2 bg-blue-500 p-4">
            <div className="flex gap-8">
                <Twitter className="h-10 w-10 cursor-pointer transition hover:scale-125" />
                <Instagram className="h-10 w-10 cursor-pointer transition hover:scale-125" />
                <Facebook className="h-10 w-10 cursor-pointer transition hover:scale-125" />
                <TikTok className="h-10 w-10 cursor-pointer transition hover:scale-125" />
            </div>
        </div>
    )
}

export default Socials
