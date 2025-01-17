export interface Product {
    id: number
    title: string
    description: string
    price: number
    image: string
    keywords: string[]
}

export interface ProductCardProps {
    product: Product
}