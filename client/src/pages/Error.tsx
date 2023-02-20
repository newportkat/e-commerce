import React from "react"
import { Link } from "react-router-dom"
const Error = () => {
    return (
        <div className="flex flex-col items-center gap-8 py-12">
            <h1 className="text-2xl">Something went wrong!</h1>
            <span className="text-4xl">😭</span>
            <Link to="/"
                className="self-center rounded-3xl bg-orange-500 py-3 px-8 text-center font-semibold text-white hover:bg-orange-600 active:bg-orange-500 sm:text-xl"
            >
                BACK HOME
            </Link>
        </div>
    )
}

export default Error
