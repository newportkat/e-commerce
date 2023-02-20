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
