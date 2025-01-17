"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"
import { ProductCardProps } from "./types"

export function ProductCard({ product }: ProductCardProps) {
    const [isStarred, setIsStarred] = useState(false)

    return (
        <Card className="flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader className="p-0">
                <div className="relative aspect-square">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover rounded-t-lg"
                    />
                </div>
            </CardHeader>
            <CardContent className="flex-grow p-4">
                <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{product.description}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                    {product.keywords.map((keyword, index) => (
                        <span
                            key={index}
                            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
                        >
              {keyword}
            </span>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <span className="font-bold">${product.price}</span>
                <Button
                    size="sm"
                    variant={isStarred ? "default" : "outline"}
                    onClick={() => setIsStarred(!isStarred)}
                >
                    <Star className={`h-4 w-4 mr-2 ${isStarred ? "fill-current" : ""}`} />
                    {isStarred ? "Starred" : "Star"}
                </Button>
            </CardFooter>
        </Card>
    )
}