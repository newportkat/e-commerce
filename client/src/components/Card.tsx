import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Anchor } from "../assets/anchor.svg"
import { ReactComponent as Extra } from "../assets/extra.svg"
import { ReactComponent as Fish } from "../assets/fish.svg"
import { ReactComponent as Kayak } from "../assets/kayak.svg"
import { ReactComponent as Lure } from "../assets/lure.svg"
import { ReactComponent as Reel } from "../assets/reel.svg"
import { ReactComponent as Rod } from "../assets/rod.svg"
import CartContext from "../context/CartContext"
import { Product } from "../interfaces/interfaces"

const Card = (props: Product) => {
    const { cartDispatch } = useContext(CartContext)
    const [quantity, setQuantity] = useState(1)

    let img

    const imgStyle = "relative h-80 w-80 rounded bg-blue-500 p-6 z-10"

    switch (props.category) {
        case "rods":
            img = <Rod className={`${imgStyle}`} />
            break
        case "reels":
            img = <Reel className={`${imgStyle}`} />
            break
        case "lures":
            img = <Lure className={`${imgStyle}`} />
            break
        case "kayaks":
            img = <Kayak className={`${imgStyle}`} />
            break
        case "extras":
            img = <Extra className={`${imgStyle}`} />
            break
        default:
            img = <Anchor className={`${imgStyle}`} />
    }

    return (
        <div className="flex flex-col gap-2 rounded text-gray-700">
            <Link to={`/product/${props.id}`} className="group relative">
                {img}
                <Fish className="absolute top-0 left-0 right-0 bottom-0 z-0 h-80 w-80 rounded bg-blue-500 p-6 group-hover:z-10" />
                {props.onSale ? (
                    <span className="absolute top-4 right-4 z-10 rounded bg-red-500 p-2 font-semibold text-white">
                        SALE!
                    </span>
                ) : props.isNew ? (
                    <span className="absolute top-4 right-4 z-10 rounded bg-red-500 p-2 font-semibold text-white">
                        NEW!
                    </span>
                ) : null}
            </Link>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <Link
                        to={`/product/${props.id}`}
                        className="text-xl font-medium"
                    >
                        {props.name}
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded bg-gray-300 hover:bg-gray-400 active:bg-gray-300">
                            <button
                                className="p-1 text-xl"
                                onClick={() => {
                                    if (quantity > 1) {
                                        setQuantity((prev) => prev - 1)
                                    }
                                }}
                            >
                                -
                            </button>
                        </div>
                        <span className="mx-1 w-2 text-center font-semibold">
                            {quantity}
                        </span>
                        <div className="flex h-6 w-6 items-center justify-center rounded bg-gray-300 hover:bg-gray-400 active:bg-gray-300">
                            <button
                                className="p-1 text-xl"
                                onClick={() => {
                                    setQuantity((prev) => prev + 1)
                                }}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        {props.onSale ? (
                            <div className="flex gap-4 font-medium">
                                <h2 className="font-bold">
                                    ${props.discountedPrice}
                                </h2>
                                <h2 className="text-red-500 line-through decoration-red-500 ">
                                    ${props.price}
                                </h2>
                            </div>
                        ) : (
                            <h2 className="font-bold">${props.price}</h2>
                        )}
                    </div>
                    <button
                        className="rounded bg-gray-300 px-2 py-1 hover:bg-gray-400 active:bg-gray-300"
                        onClick={() =>
                            cartDispatch({
                                type: "addItem",
                                payload: { ...props, quantity: quantity },
                            })
                        }
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
