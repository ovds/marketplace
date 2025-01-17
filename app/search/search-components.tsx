"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { ProductCard } from "./product-card"
import {useState, useMemo, Suspense} from "react"

export function SearchInput({ onSearch }: { onSearch: (query: string) => void }) {
    return (
        <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
                className="w-full pl-10"
                placeholder="Search for products..."
                type="search"
                onChange={(e) => onSearch(e.target.value)}
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
        image: "/api/placeholder/400/300",
        keywords: ["audio", "music", "bluetooth"]
    },
    {
        id: 2,
        title: "Smart Watch",
        description: "Feature-rich smartwatch with health tracking and notifications",
        price: 199.99,
        image: "/api/placeholder/400/300",
        keywords: ["wearable", "fitness", "health"]
    },
    {
        id: 3,
        title: "Laptop Stand",
        description: "Ergonomic aluminum laptop stand with adjustable height",
        price: 49.99,
        image: "/api/placeholder/400/300",
        keywords: ["desk", "ergonomic", "work"]
    },
    {
        id: 4,
        title: "Mechanical Keyboard",
        description: "RGB mechanical keyboard with custom switches",
        price: 159.99,
        image: "/api/placeholder/400/300",
        keywords: ["typing", "gaming", "rgb"]
    },
    {
        id: 5,
        title: "Wireless Gaming Mouse",
        description: "High-precision wireless gaming mouse with RGB lighting",
        price: 79.99,
        image: "/api/placeholder/400/300",
        keywords: ["gaming", "rgb", "wireless"]
    },
]

function calculateRelevanceScore(product: any, searchQuery: string): number {
    if (!searchQuery) return 0;

    const query = searchQuery.toLowerCase();
    let score = 0;

    // Title match (highest weight)
    if (product.title.toLowerCase().includes(query)) {
        score += 10;
        // Exact match gets bonus points
        if (product.title.toLowerCase() === query) {
            score += 5;
        }
    }

    // Description match
    if (product.description.toLowerCase().includes(query)) {
        score += 5;
    }

    // Keyword matches
    product.keywords.forEach((keyword: string) => {
        if (keyword.toLowerCase().includes(query)) {
            score += 3;
        }
    });

    return score;
}

export function SearchResults() {
    const [searchQuery, setSearchQuery] = useState("");

    const sortedProducts = useMemo(() => {
        if (!searchQuery) return DUMMY_PRODUCTS;

        return [...DUMMY_PRODUCTS].sort((a, b) => {
            const scoreA = calculateRelevanceScore(a, searchQuery);
            const scoreB = calculateRelevanceScore(b, searchQuery);
            return scoreB - scoreA;
        });
    }, [searchQuery]);

    return (
        <div>
            <div className="sticky top-0 z-10 dark:bg-gray-900/50 backdrop-blur-md border-b round-l">
                <div className="container mx-auto px-4 py-4">
                    <SearchInput onSearch={setSearchQuery}/>
                </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}