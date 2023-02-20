import React from "react"
import { ReactComponent as Amex } from "../assets/amex.svg"
import { ReactComponent as Bitcoin } from "../assets/bitcoin.svg"
import { ReactComponent as Mastercard } from "../assets/mastercard.svg"
import { ReactComponent as PayPal } from "../assets/paypal.svg"
import { ReactComponent as Visa } from "../assets/visa.svg"

const Footer = () => {
    return (
        <div className="flex flex-col gap-8 bg-blue-800 p-8">
            <div className="flex items-center justify-between text-white sm:justify-center sm:gap-16">
                <div className="flex-1/2">
                    <h1 className="mb-2 border-b-2 text-lg font-semibold">
                        TACKLE SHOP
                    </h1>
                    <ul>
                        <li>About Us</li>
                        <li>Find a Store</li>
                        <li>Gift Cards</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="flex-1/2">
                    <h1 className="mb-2 border-b-2 text-lg font-semibold">
                        POPULAR BRANDS
                    </h1>
                    <ul>
                        <li>Siren Song</li>
                        <li>Mystery Fisher</li>
                        <li>Ocean's Crown</li>
                        <li>Bass Hunter</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <h1 className="mb-2 border-b-2 text-lg font-semibold text-white">
                    PAYMENT OPTIONS
                </h1>
                <div className="flex gap-6">
                    <Amex className="h-8 w-8" />
                    <Bitcoin className="h-8 w-8" />
                    <Mastercard className="h-8 w-8" />
                    <PayPal className="h-8 w-8" />
                    <Visa className="h-8 w-8" />
                </div>
            </div>
        </div>
    )
}

export default Footer
