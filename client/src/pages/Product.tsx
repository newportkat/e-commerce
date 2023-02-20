import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ReactComponent as Anchor } from "../assets/anchor.svg"
import { ReactComponent as Extra } from "../assets/extra.svg"
import { ReactComponent as Fish } from "../assets/fish.svg"
import { ReactComponent as Hook } from "../assets/hook.svg"
import { ReactComponent as Kayak } from "../assets/kayak.svg"
import { ReactComponent as Lure } from "../assets/lure.svg"
import { ReactComponent as Reel } from "../assets/reel.svg"
import { ReactComponent as Rod } from "../assets/rod.svg"
import CartContext from "../context/CartContext"

const Product = () => {
    const { cartDispatch } = useContext(CartContext)
    const productId = useParams().id
    const [productData, setProductData] = useState()
    const [selectedImg, setSelectedImg] = useState("img1")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        const getProductData = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:3000/product/${productId}`
                )
                const data = res.data
                setProductData(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setError(true)
                setLoading(false)
            }
        }
        getProductData()
    }, [])

    const productCategory = productData?.category

    const largeImgStyle = ""
    const smallImgStyle = ""

    let largeCategoryImg, smallCategoryImg

    switch (productCategory) {
        case "rods":
            largeCategoryImg = (
                <Rod className="h-80 w-80 cursor-pointer rounded bg-blue-500 p-4 lg:h-[30rem] lg:w-[30rem]" />
            )
            smallCategoryImg = (
                <Rod
                    className="h-16 w-16 cursor-pointer rounded bg-blue-500 p-2"
                    onClick={() => {
                        setSelectedImg("img1")
                    }}
                />
            )
            break

        case "reels":
            largeCategoryImg = (
                <Reel className="h-80 w-80 cursor-pointer rounded bg-blue-500 p-4 lg:h-[30rem] lg:w-[30rem]" />
            )
            smallCategoryImg = (
                <Reel
                    className="h-16 w-16 cursor-pointer rounded bg-blue-500 p-2"
                    onClick={() => {
                        setSelectedImg("img1")
                    }}
                />
            )
            break

        case "lures":
            largeCategoryImg = (
                <Lure className="h-80 w-80 cursor-pointer rounded bg-blue-500 p-4 lg:h-[30rem] lg:w-[30rem]" />
            )
            smallCategoryImg = (
                <Lure
                    className="h-16 w-16 cursor-pointer rounded bg-blue-500 p-2"
                    onClick={() => {
                        setSelectedImg("img1")
                    }}
                />
            )
            break

        case "kayaks":
            largeCategoryImg = (
                <Kayak className="h-80 w-80 cursor-pointer rounded bg-blue-500 p-4 lg:h-[30rem] lg:w-[30rem]" />
            )
            smallCategoryImg = (
                <Kayak
                    className="h-16 w-16 cursor-pointer rounded bg-blue-500 p-2"
                    onClick={() => {
                        setSelectedImg("img1")
                    }}
                />
            )
            break

        case "extras":
            largeCategoryImg = (
                <Extra className="h-80 w-80 cursor-pointer rounded bg-blue-500 p-4 lg:h-[30rem] lg:w-[30rem]" />
            )
            smallCategoryImg = (
                <Extra
                    className="h-16 w-16 cursor-pointer rounded bg-blue-500 p-2"
                    onClick={() => {
                        setSelectedImg("img1")
                    }}
                />
            )
            break

        default:
            largeCategoryImg = (
                <Anchor className="h-80 w-80 cursor-pointer rounded bg-blue-500 p-4 lg:h-[30rem] lg:w-[30rem]" />
            )
            smallCategoryImg = (
                <Anchor
                    className="h-16 w-16 cursor-pointer rounded bg-blue-500 p-2"
                    onClick={() => {
                        setSelectedImg("img1")
                    }}
                />
            )
    }

    return (
        <div className="w-full p-6 text-gray-700 sm:p-10">
            {loading ? (
                <div>
                    <h1>Loading...</h1>
                </div>
            ) : error ? (
                <div>
                    <h1>Something went wrong!</h1>
                </div>
            ) : (
                <div className="flex w-full flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-10">
                    <div className="flex flex-col items-center gap-4 sm:w-1/2 sm:items-end">
                        <div>
                            {selectedImg === "img1" ? (
                                largeCategoryImg
                            ) : selectedImg === "img2" ? (
                                <Fish className="h-80 w-80 cursor-pointer rounded bg-blue-500 p-4 lg:h-[30rem] lg:w-[30rem]" />
                            ) : (
                                <Hook className="h-80 w-80 cursor-pointer rounded bg-blue-500 p-4 lg:h-[30rem] lg:w-[30rem]" />
                            )}
                        </div>
                        <div className="flex w-full justify-evenly sm:justify-end sm:gap-6">
                            <div>{smallCategoryImg}</div>
                            <div>
                                <Fish
                                    className="h-16 w-16 cursor-pointer rounded bg-blue-500 p-2"
                                    onClick={() => {
                                        setSelectedImg("img2")
                                    }}
                                />
                            </div>
                            <div>
                                <Hook
                                    className="h-16 w-16 cursor-pointer rounded bg-blue-500 p-2"
                                    onClick={() => {
                                        setSelectedImg("img3")
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 sm:h-full sm:w-1/2 sm:items-start">
                        <h1 className="border-b-2 border-black text-xl font-semibold">
                            {productData.name}
                        </h1>
                        <div>
                            {productData.onSale ? (
                                <div className="flex gap-4 font-medium">
                                    <h2 className="font-bold">
                                        ${productData.discountedPrice}
                                    </h2>
                                    <h2 className="text-red-500 line-through decoration-red-500 ">
                                        ${productData.price}
                                    </h2>
                                </div>
                            ) : (
                                <h2 className="font-bold text-gray-700">
                                    ${productData.price}
                                </h2>
                            )}
                        </div>
                        <div className="flex items-center gap-3">
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
                            <span className="w-2 text-center font-semibold mx-1">
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
                        <button
                            className="rounded bg-gray-300 px-2 py-1 font-medium hover:bg-gray-400 active:bg-gray-300"
                            onClick={() =>
                                cartDispatch({
                                    type: "addItem",
                                    payload: { ...productData, quantity: quantity },
                                })
                            }
                        >
                            Add To Cart
                        </button>
                        <p className="my-4 w-10/12 tracking-wider sm:w-3/4">
                            {productData.desc}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Product
