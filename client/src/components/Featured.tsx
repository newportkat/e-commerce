import axios from "axios"
import React, { useEffect, useState } from "react"
import Card from "./Card"
import { FeaturedProps, Product } from "../interfaces/interfaces"

const Featured = (props : FeaturedProps) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [filteredProducts, setFilteredProducts] = useState([])

    const type = props.type

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/products")
                const data = res.data
                setProducts(data)
            } catch (error) {
                setLoading(false)
                setError(true)
                console.log(error)
            }
        }
        getProducts()
    }, [])

    useEffect(() => {
        const filteredArray = products.filter((item : Product) => item.isFeatured)
        const slicedArray = filteredArray.slice(0, 6)
        setFilteredProducts(slicedArray)
        setLoading(false)
    }, [products])

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error loading products.</p>}
            {!loading && !error && (
                <div className="flex flex-col items-center px-4 py-10 gap-10 sm:gap-20 sm:py-20 sm:px-10">
                    <h1 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-900 sm:text-4xl">Featured Products</h1>
                    <div className="flex flex-wrap items-center justify-center gap-14 sm:gap-24">
                        {filteredProducts.map((product : Product) => (
                            <Card key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Featured
