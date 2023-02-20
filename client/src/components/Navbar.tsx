import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Anchor } from "../assets/anchor.svg"
import { ReactComponent as Extra } from "../assets/extra.svg"
import { ReactComponent as Fish } from "../assets/fish.svg"
import { ReactComponent as Kayak } from "../assets/kayak.svg"
import { ReactComponent as Lure } from "../assets/lure.svg"
import { ReactComponent as Reel } from "../assets/reel.svg"
import { ReactComponent as Rod } from "../assets/rod.svg"
import CartContext from "../context/CartContext"
import { Category } from "../interfaces/interfaces"

const Navbar = (props) => {
    const [categories, setCategories] = useState([])
    const { cartState, cartDispatch } = useContext(CartContext)
   
    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await axios.get("http://localhost:3000/categories")
                const data = res.data
                setCategories(data)
            } catch (error) {
                console.log(error)
            }
        }

        getCategories()
    }, [])

    return (
        <nav className="relative flex w-full flex-col bg-blue-500 text-center">
            <div
                className={`absolute z-50 ${
                    props.showMenu ? "" : `-translate-y-full`
                } flex w-full flex-col items-center justify-evenly gap-8 bg-blue-500 p-8 font-semibold capitalize text-white transition`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-10 w-10 cursor-pointer transition hover:text-blue-300"
                    onClick={props.toggleMenu}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>

                {categories.map((category: Category) => (
                    <div key={category.id} className="group relative">
                        <Link
                            to={`/products/${category.name}`}
                            className="cursor-pointer"
                            onClick={props.toggleMenu}
                        >
                            {category.name}
                        </Link>
                        <span className="absolute -bottom-1 left-0 h-1 w-0 bg-white transition-all group-hover:w-full"></span>
                    </div>
                ))}
            </div>
            <div
                className={`absolute z-50 ${
                    props.showCart ? "" : `-translate-y-full`
                } flex w-full flex-col items-center gap-6 bg-blue-900 py-8 font-semibold text-white shadow-2xl transition`}
            >
                <div className="flex w-[20rem] flex-col gap-6 text-left">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-10 w-10 cursor-pointer self-center transition hover:text-blue-300"
                        onClick={props.toggleCart}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    {cartState.items.map((item) => {
                        let img
                        const imgStyle = "h-12 w-12 rounded bg-blue-500 p-2"
                        switch (item.category) {
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
                            <div
                                className="flex items-center gap-2"
                                key={item.id}
                            >
                                {img}
                                <div className="flex w-full flex-col gap-1">
                                    <div className="flex items-center justify-between border-b-2">
                                        <h1 className="text-xl font-semibold">
                                            {item.name}
                                        </h1>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="h-5 w-5 cursor-pointer text-blue-900 hover:text-red-500"
                                            onClick={() => {
                                                cartDispatch({
                                                    type: "deleteItem",
                                                    payload: { ...item },
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
                                    <p className="font-light">
                                        $
                                        {item.onSale
                                            ? item.discountedPrice
                                            : item.price}{" "}
                                        x {item.quantity} = $
                                        {item.onSale
                                            ? item.discountedPrice
                                            : item.price * item.quantity}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <p>
                    TOTAL: $<span>{cartState.totalPrice.toFixed(2)}</span>
                </p>
                <Link
                    to="/checkout"
                    className="rounded-3xl bg-orange-500 py-3 px-8 font-semibold text-white hover:bg-orange-600 active:bg-orange-500 sm:text-xl"
                    onClick={props.toggleCart}
                >
                    CHECKOUT
                </Link>
            </div>
            <div className="flex w-full items-center justify-around px-4 py-6 text-white sm:p-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-10 w-10 cursor-pointer transition hover:text-blue-300 sm:invisible"
                    onClick={props.toggleMenu}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
                <Link
                    to="/"
                    className="mx-4 cursor-pointer font-bowlby text-3xl sm:text-4xl"
                >
                    Tackle Shop
                </Link>
                <div className="relative cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-10 w-10 transition hover:text-blue-300"
                        onClick={props.toggleCart}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                    </svg>
                    <div className="absolute -top-1 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 p-2">
                        <span className="text-xs font-semibold">
                            {cartState.items.length}
                        </span>
                    </div>
                </div>
            </div>
            <div className="hidden w-full justify-between bg-blue-900 p-4 font-semibold capitalize text-white sm:flex sm:justify-center sm:gap-14">
                {categories.map((category: Category) => (
                    <div key={category.id} className="group relative">
                        <Link
                            to={`/products/${category.name}`}
                            className="cursor-pointer"
                        >
                            {category.name}
                        </Link>
                        <span className="absolute -bottom-1 left-0 h-1 w-0 bg-white transition-all group-hover:w-full"></span>
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default Navbar
