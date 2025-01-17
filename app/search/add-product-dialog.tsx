"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

interface AddProductDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onAddProduct: (product: any) => void
    categories: string[]
}

export function AddProductDialog({ open, onOpenChange, onAddProduct, categories }: AddProductDialogProps) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        category: "",
        keywords: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onAddProduct({
            ...formData,
            price: parseFloat(formData.price),
            keywords: formData.keywords.split(",").map(k => k.trim()),
            image: "/api/placeholder/400/300"
        })
        onOpenChange(false)
        setFormData({
            title: "",
            description: "",
            price: "",
            category: "",
            keywords: ""
        })
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Product</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        placeholder="Product Title"
                        value={formData.title}
                        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                        required
                    />
                    <Input
                        placeholder="Description"
                        value={formData.description}
                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                        required
                    />
                    <Input
                        type="number"
                        step="0.01"
                        placeholder="Price"
                        value={formData.price}
                        onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                        required
                    />
                    <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((category) => (
                                <SelectItem key={category} value={category}>
                                    {category}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Input
                        placeholder="Keywords (comma-separated)"
                        value={formData.keywords}
                        onChange={(e) => setFormData(prev => ({ ...prev, keywords: e.target.value }))}
                        required
                    />
                    <Button type="submit">Add Product</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}