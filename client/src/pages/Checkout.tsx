import React, { useContext } from "react"
import { Link } from "react-router-dom"
import CheckoutItem from "../components/CheckoutItem"
import CartContext from "../context/CartContext"

const Checkout = () => {
    const { cartState, cartDispatch } = useContext(CartContext)

    const handleQuantityChange = (id, newQuantity) => {
        cartDispatch({
            type: "updateQuantity",
            payload: { id, newQuantity },
        })
    }

    return (
        <div className="flex h-full flex-col items-center gap-6 p-6 text-gray-700">
            <h1 className="border-b-2 text-xl font-medium">CART SUMMARY:</h1>
            {cartState.items.length === 0 && (
                <div className="flex flex-col items-center gap-2">
                    <h1>You've got no items in your cart!</h1>
                    <span className="text-4xl">😭</span>
                </div>
            )}
            <div className="flex w-[20rem] flex-col gap-8">
                {cartState.items.map((item) => (
                    <CheckoutItem
                        {...item}
                        key={item.id}
                        onQuantityChange={handleQuantityChange}
                    />
                ))}
            </div>
            <p>
                TOTAL: $
                <span className="font-semibold">
                    {cartState.totalPrice.toFixed(2)}
                </span>
            </p>
            {cartState.items.length === 0
            ? <Link to="/"
            className="self-center rounded-3xl bg-orange-500 py-3 px-8 text-center font-semibold text-white hover:bg-orange-600 active:bg-orange-500 sm:text-xl"
                >
                SHOP NOW
            </Link>
            : <button
            className="self-center rounded-3xl bg-orange-500 py-3 px-8 text-center font-semibold text-white hover:bg-orange-600 active:bg-orange-500 sm:text-xl"
            onClick={() => {
                alert(
                    "As this is a mock e-commerce store, no payment gateway has been set up."
                    )
                }}
                >
                CONFIRM AND PAY
            </button>
        }
        </div>
    )
}

export default Checkout
