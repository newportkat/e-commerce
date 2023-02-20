export interface Category {
    name: string
    id: string
}

export interface Product {
    category: string
    name: string
    desc: string
    price: number
    discountedPrice: number
    brand: string
    isNew: boolean
    isFeatured: boolean
    onSale: boolean
    img: string
    img2: string
    id: string
}

export interface AddedProduct {
    category: string
    name: string
    desc: string
    price: number
    discountedPrice: number
    brand: string
    isNew: boolean
    isFeatured: boolean
    onSale: boolean
    img: string
    img2: string
    id: string
    quantity: number
    onQuantityChange?: (id: any, newQuantity: any) => void
}

export interface NavbarProps {
    showMenu: boolean
    toggleMenu: () => void
    showCart: boolean
    toggleCart: () => void
}

export interface FeaturedProps {
    type: string
}

export interface SvgProps {
    style: string
    onClick?: () => void
}

export interface CartActionType {
    type: string
    payload?: any
}


export interface CartContextType {
    items: AddedProduct[]
    totalPrice: number
    cartDispatch?: React.Dispatch<CartActionType>
    cartState?: CartContextType
}

export interface ContextProviderProps {
    children: React.ReactNode
}