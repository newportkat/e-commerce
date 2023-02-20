import React, { createContext, Reducer, useEffect, useReducer } from "react"
import {
    AddedProduct,
    CartActionType,
    CartContextType,
    ContextProviderProps,
} from "../interfaces/interfaces"

const CartContext = createContext<CartContextType | undefined>(undefined)

const reducer: Reducer<CartContextType, CartActionType> = (state, action) => {
    function getTotalPrice(items: AddedProduct[]) {
        let finalPrice = 0
        items.map(
            (item: AddedProduct) =>
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
                (item: AddedProduct) => item.id === newItem.id
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
                (item: AddedProduct) => item.id !== itemId
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
                (item: AddedProduct) => item.id === quantityId
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

export function CartProvider({ children }: ContextProviderProps) {
    const [cartState, cartDispatch] = useReducer(reducer, getInitialState())

    function getInitialState() {
        const cartData = localStorage.getItem("cart")
        if (cartData) {
            const parsedData = JSON.parse(cartData)
            const items = parsedData.items || [] // fallback to empty array if items is undefined
            const totalPrice = parsedData.totalPrice || 0 // fallback to 0 if totalPrice is undefined
            return { items, totalPrice }
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
        <CartContext.Provider
            value={{
                cartState,
                cartDispatch,
                items: cartState.items,
                totalPrice: cartState.totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
