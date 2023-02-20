import React, { createContext, useEffect, useReducer, useState } from "react"

const CartContext = createContext()

const reducer = (state, action) => {
    function getTotalPrice(items) {
        let finalPrice = 0
        items.map(
            (item) =>
                (finalPrice +=
                    item.quantity *
                    (item.onSale ? item.discountedPrice : item.price))
        )
        return finalPrice
    }

    switch (action.type) {
        case "initializeCart":
            return action.payload
        case "addItem":
            const newItem = action.payload
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === newItem.id
            )
            if (existingItemIndex !== -1) {
                const updatedItems = [...state.items]
                updatedItems[existingItemIndex].quantity += newItem.quantity
                const totalPrice = getTotalPrice(updatedItems)
                return {
                    items: updatedItems,
                    totalPrice,
                }
            } else {
                const updatedItems = [...state.items, newItem]
                const totalPrice = getTotalPrice(updatedItems)
                return {
                    items: updatedItems,
                    totalPrice,
                }
            }
        case "deleteItem":
            const itemId = action.payload.id
            const updatedItems = state.items.filter(
                (item) => item.id !== itemId
            )
            const totalPrice = getTotalPrice(updatedItems)
            return {
                items: updatedItems,
                totalPrice,
            }
        case "updateQuantity":
            const quantityId = action.payload.id
            const newQuantity = action.payload.newQuantity
            const quantityIndex = state.items.findIndex(
                (item) => item.id === quantityId
            )
            if (quantityIndex !== -1) {
                const currentArray = [...state.items]
                currentArray[quantityIndex].quantity = newQuantity
                const totalPrice = getTotalPrice(currentArray)
                return { items: currentArray, totalPrice }
            } else {
                return state
            }

        default:
            throw new Error()
    }
}

export function CartProvider({ children }) {
    const [cartState, cartDispatch] = useReducer(reducer, getInitialState())

    function getInitialState() {
        const cartData = localStorage.getItem("cart")
        if (cartData) {
            const parsedData = JSON.parse(cartData)
            return parsedData
        }
        return { items: [], totalPrice: 0 }
    }

    useEffect(() => {
        // Load cart data from local storage
        const cartData = localStorage.getItem("cart")
        if (cartData) {
            const parsedData = JSON.parse(cartData)
            cartDispatch({ type: "initializeCart", payload: parsedData })
        }
    }, [])

    useEffect(() => {
        // Save cart data to local storage
        localStorage.setItem("cart", JSON.stringify(cartState))
    }, [cartState])

    return (
        <CartContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
