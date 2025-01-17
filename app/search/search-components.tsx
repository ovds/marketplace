"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { ProductCard } from "./product-card"

export function SearchInput() {
    return (
        <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
                className="w-full pl-10"
                placeholder="Search for products..."
                type="search"
            />
        </div>
    )
}

const DUMMY_PRODUCTS = [
    {
        id: 1,
        title: "Wireless Headphones",
        description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
        price: 299.99,
        image: "/api/placeholder/400/300"
    },
    {
        id: 2,
        title: "Smart Watch",
        description: "Feature-rich smartwatch with health tracking and notifications",
        price: 199.99,
        image: "/api/placeholder/400/300"
    },
    {
        id: 3,
        title: "Laptop Stand",
        description: "Ergonomic aluminum laptop stand with adjustable height",
        price: 49.99,
        image: "/api/placeholder/400/300"
    },
    {
        id: 4,
        title: "Mechanical Keyboard",
        description: "RGB mechanical keyboard with custom switches",
        price: 159.99,
        image: "/api/placeholder/400/300"
    },
]

export function SearchResults() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {DUMMY_PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}