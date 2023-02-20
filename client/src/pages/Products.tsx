import axios from "axios"
import { nanoid } from "nanoid"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../components/Card"

const Products = () => {
    const initialCategory = useParams().id
    const [order, setOrder] = useState("des")
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    const filterByCategory = (category) => {
        const filteredProducts = products.filter(
            (product) => product.category === category
        )
        setFilteredProducts(filteredProducts)

        const sortedProducts = [...filteredProducts].sort((a, b) => {
            let aPrice = a.onSale ? a.discountedPrice : a.price
            let bPrice = b.onSale ? b.discountedPrice : b.price

            if (order === "asc") {
                return aPrice - bPrice
            } else {
                return bPrice - aPrice
            }
        })

        setFilteredProducts(sortedProducts)
    }

    const sortByPrice = () => {
        const sortedProducts = [...filteredProducts].sort((a, b) => {
            if (order === "des") {
                return a.price - b.price
            } else {
                return b.price - a.price
            }
        })
        setFilteredProducts(sortedProducts)
    }

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:3000/products")
                const data = res.data
                setProducts(data)
                setFilteredProducts(data)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()
    }, [])

    useEffect(() => {
        if (initialCategory && products.length > 0) {
            filterByCategory(initialCategory)
        }
    }, [initialCategory, products])

    return (
        <div className="flex flex-col items-center gap-6 pb-8 px-8 sm:pb-14">
            <div className="flex w-full justify-around p-4 sm:justify-center sm:gap-14">
                <div className="flex flex-col gap-1">
                    <h1 className="py-1 px-2">Category</h1>
                    <select
                        onChange={(e) => {
                            filterByCategory(e.target.value)
                        }}
                        className="w-32 cursor-pointer rounded bg-gray-300 py-1 px-2"
                    >
                        <option value={initialCategory}>Select</option>
                        <option value="rods">Rods</option>
                        <option value="reels">Reels</option>
                        <option value="lures">Lures</option>
                        <option value="kayaks">Kayaks</option>
                        <option value="extras">Extras</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="py-1 px-2">Price</h1>
                    <select
                        onChange={(e) => {
                            setOrder(e.target.value)
                            sortByPrice()
                        }}
                        className="w-32 cursor-pointer rounded bg-gray-300 py-1 px-2"
                    >
                        <option value="des">High to Low</option>
                        <option value="asc">Low to High</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-14">
                {filteredProducts.map((product) => (
                    <Card key={product.id} {...product} />
                ))}
            </div>
        </div>
    )
}

export default Products
