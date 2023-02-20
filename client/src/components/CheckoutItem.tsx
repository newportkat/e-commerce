import React, { useContext } from "react"
import Anchor from "../svgComponents/Anchor"
import Extra from "../svgComponents/Extra"
import Kayak from "../svgComponents/Kayak"
import Lure from "../svgComponents/Lure"
import Reel from "../svgComponents/Reel"
import Rod from "../svgComponents/Rod"
import CartContext from "../context/CartContext"
import { AddedProduct } from "../interfaces/interfaces"

const CheckoutItem = (props : AddedProduct) => {
const context = useContext(CartContext)
const cartDispatch = context?.cartDispatch

    let img
    const imgStyle = "h-12 w-12 rounded bg-blue-500 p-2"

    switch (props.category) {
        case "rods":
            img = <Rod style={`${imgStyle}`} />
            break
        case "reels":
            img = <Reel style={`${imgStyle}`} />
            break
        case "lures":
            img = <Lure style={`${imgStyle}`} />
            break
        case "kayaks":
            img = <Kayak style={`${imgStyle}`} />
            break
        case "extras":
            img = <Extra style={`${imgStyle}`} />
            break
        default:
            img = <Anchor style={`${imgStyle}`} />
    }

    return (
        <div className="flex items-center gap-3">
            {img}
            <div key={props.id} className="flex w-full flex-col gap-2">
                <div className="flex items-center justify-between border-b-2">
                    <h1 className="text-xl font-semibold">{props.name}</h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5 cursor-pointer text-blue-900 hover:text-red-500"
                        onClick={() => {
                            cartDispatch?.({
                                type: "deleteItem",
                                payload: { ...props },
                            })
                        }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                </div>
                <div className="flex justify-between">
                    <p className="font-light">
                        ${props.onSale ? props.discountedPrice : props.price} x{" "}
                        {props.quantity} = $
                        {(props.onSale
                            ? props.discountedPrice * props.quantity
                            : props.price * props.quantity
                        ).toFixed(2)}
                    </p>
                    <div className="flex items-center gap-1">
                        <div className="flex h-6 w-6 items-center justify-center rounded bg-gray-300 hover:bg-gray-400 active:bg-gray-300">
                            <button
                                className="p-1 text-xl"
                                onClick={() => {
                                    if (props.quantity > 1) {
                                        props.onQuantityChange?.(
                                            props.id,
                                            props.quantity - 1
                                        )
                                    }
                                }}
                            >
                                -
                            </button>
                        </div>
                        <span className="mx-1 w-2 text-center font-semibold">
                            {props.quantity}
                        </span>
                        <div className="flex h-6 w-6 items-center justify-center rounded bg-gray-300 hover:bg-gray-400 active:bg-gray-300">
                            <button
                                className="p-1 text-xl"
                                onClick={() =>
                                    props.onQuantityChange?.(
                                        props.id,
                                        props.quantity + 1
                                    )
                                }
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutItem
