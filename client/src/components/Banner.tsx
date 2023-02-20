import React, { useEffect, useState } from "react"

const Banner = () => {
    const ads = [
        <p>
            Don't Miss The Bite
            <span className="font-bold"> - Shop Now!</span>
        </p>,
        <p>
            Free Delivery
            <span className="font-bold"> - Hook Up With Our Gear!</span>
        </p>,
        <p>
            Click & Collect
            <span className="font-bold"> - Find Your Perfect Catch!</span>
        </p>,
    ]

    const [ad, setAd] = useState(ads[0])

    let adIndex = 0

    const carousel = () => {
        if (adIndex !== ads.length - 1) {
            adIndex += 1
        } else {
            adIndex = 0
        }
        setAd(ads[adIndex])
    }

    useEffect(() => {
        const intervalID = setInterval(carousel, 3000)
        return () => clearInterval(intervalID)
    }, [adIndex])

    return (
        <div className="bg-blue-800 w-full p-4 text-center font-medium text-white sm:block sm:bg-blue-500">
            {ad}
        </div>
    )
}

export default Banner
