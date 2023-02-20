import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Kayaks from "../assets/kayaks.jpg"
import Lures from "../assets/lures.jpg"
import Reels from "../assets/reels.jpg"
import Rods from "../assets/rods.jpg"

const Carousel = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const carouselForward = () => {
        if (slideIndex < 3) {
            setSlideIndex((prev) => prev + 1)
        }
    }

    const carouselBack = () => {
        if (slideIndex > 0) {
            setSlideIndex((prev) => prev - 1)
        }
    }

    let translation

    switch (slideIndex) {
        case 0:
            translation = ""
            break
        case 1:
            translation = "-translate-x-[100vw]"
            break
        case 2:
            translation = "-translate-x-[200vw]"
            break
        case 3:
            translation = "-translate-x-[300vw]"
            break
        default:
            translation = ""
            break
    }

    return (
        <div className="relative overflow-hidden">
            <div className="absolute top-1/2 z-10 flex w-full -translate-y-1/2 justify-between px-8 sm:px-12 md:px-16 lg:px-24">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className={`h-8 w-8 cursor-pointer text-white transition duration-700 ${
                        slideIndex === 0 ? "cursor-default opacity-0" : ""
                    }`}
                    onClick={carouselBack}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className={`h-8 w-8 cursor-pointer text-white transition duration-700 ${
                        slideIndex === 3 ? "cursor-default opacity-0" : ""
                    }`}
                    onClick={carouselForward}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </div>
            <div
                className={`flex w-[400vw] transition duration-700 ${translation} bg-blue-900`}
            >
                <div className="relative">
                    <img
                        src={Rods}
                        alt=""
                        className="max-h-[40rem] w-screen object-cover"
                    />

                    <Link
                        to="/products/rods"
                        className="absolute left-1/2 bottom-1/4 -translate-x-1/2 rounded-3xl bg-orange-500 py-3 px-8 font-semibold text-white hover:bg-orange-600 active:bg-orange-500 sm:text-xl"
                    >
                        SHOP RODS
                    </Link>
                </div>
                <div className="relative">
                    <img
                        src={Lures}
                        alt=""
                        className="max-h-[40rem] w-screen object-cover"
                    />
                    <Link
                        to="/products/lures"
                        className="absolute left-1/2 bottom-1/4 -translate-x-1/2 rounded-3xl bg-orange-500 py-3 px-8 font-semibold text-white hover:bg-orange-600 active:bg-orange-500 sm:text-xl"
                    >
                        SHOP LURES
                    </Link>
                </div>
                <div className="relative">
                    <img
                        src={Kayaks}
                        alt=""
                        className="max-h-[40rem] w-screen object-cover"
                    />
                    <Link
                        to="/products/kayaks"
                        className="absolute left-1/2 bottom-1/4 -translate-x-1/2 rounded-3xl bg-orange-500 py-3 px-8 font-semibold text-white hover:bg-orange-600 active:bg-orange-500 sm:text-xl"
                    >
                        SHOP KAYAKS
                    </Link>
                </div>
                <div className="relative">
                    <img
                        src={Reels}
                        alt=""
                        className="max-h-[40rem] w-screen object-cover"
                    />
                    <Link
                        to="/products/reels"
                        className="absolute left-1/2 bottom-1/4 -translate-x-1/2 rounded-3xl bg-orange-500 py-3 px-8 font-semibold text-white hover:bg-orange-600 active:bg-orange-500 sm:text-xl"
                    >
                        SHOP REELS
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Carousel
