"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, SortAsc, SortDesc } from "lucide-react"
import { ProductCard } from "./product-card"
import { useState, useMemo } from "react"
// @ts-ignore
import Fuse from "fuse.js"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const CATEGORIES = ["All", "Audio", "Wearables", "Gaming", "Accessories"]

const DUMMY_PRODUCTS = [
    {
        id: 1,
        title: "Wireless Headphones",
        description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
        price: 299.99,
        image: "/api/placeholder/400/300",
        keywords: ["audio", "music", "bluetooth"],
        category: "Audio"
    },
    {
        id: 2,
        title: "Smart Watch",
        description: "Feature-rich smartwatch with health tracking and notifications",
        price: 199.99,
        image: "/api/placeholder/400/300",
        keywords: ["wearable", "fitness", "health"],
        category: "Wearables"
    },
    {
        id: 3,
        title: "Laptop Stand",
        description: "Ergonomic aluminum laptop stand with adjustable height",
        price: 49.99,
        image: "/api/placeholder/400/300",
        keywords: ["desk", "ergonomic", "work"],
        category: "Accessories"
    },
    {
        id: 4,
        title: "Mechanical Keyboard",
        description: "RGB mechanical keyboard with custom switches",
        price: 159.99,
        image: "/api/placeholder/400/300",
        keywords: ["typing", "gaming", "rgb"],
        category: "Gaming"
    },
    {
        id: 5,
        title: "Wireless Gaming Mouse",
        description: "High-precision wireless gaming mouse with RGB lighting",
        price: 79.99,
        image: "/api/placeholder/400/300",
        keywords: ["gaming", "rgb", "wireless"],
        category: "Gaming"
    },
]

const fuseOptions = {
    keys: ['title', 'description', 'keywords', 'category'],
    threshold: 0.3,
    includeScore: true
}

export function SearchFilters({
                                  onSearch,
                                  onCategoryChange,
                                  onSortChange
                              }: {
    onSearch: (query: string) => void,
    onCategoryChange: (category: string) => void,
    onSortChange: (order: 'asc' | 'desc' | null) => void
}) {
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null)

    return (
        <div className="space-y-4">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                    className="w-full pl-10"
                    placeholder="Search products..."
                    type="search"
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
            <div className="flex gap-4">
                <Select onValueChange={onCategoryChange}>
                    <SelectTrigger>
                        <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                        {CATEGORIES.map((category) => (
                            <SelectItem key={category} value={category.toLowerCase()}>
                                {category}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                        const newOrder = sortOrder === 'asc' ? 'desc' : 'asc'
                        setSortOrder(newOrder)
                        onSortChange(newOrder)
                    }}
                >
                    {sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
                </Button>
            </div>
        </div>
    )
}

export function SearchResults() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null)
    const fuse = new Fuse(DUMMY_PRODUCTS, fuseOptions)

    const filteredAndSortedProducts = useMemo(() => {
        let results = [...DUMMY_PRODUCTS]

        if (searchQuery) {
            const fuseResults = fuse.search(searchQuery)
            results = fuseResults.map((result: { item: any }) => result.item)
        }

        if (selectedCategory !== "all") {
            results = results.filter(
                product => product.category.toLowerCase() === selectedCategory
            )
        }

        if (sortOrder) {
            results.sort((a, b) => {
                if (sortOrder === 'asc') {
                    return a.price - b.price
                }
                return b.price - a.price
            })
        }

        return results
    }, [searchQuery, selectedCategory, sortOrder])

    return (
        <div>
            <SearchFilters
                onSearch={setSearchQuery}
                onCategoryChange={setSelectedCategory}
                onSortChange={setSortOrder}
            />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAndSortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}