"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const REFERENCES = [
    {
        title: "Core Technologies",
        items: [
            { name: "Next.js 15", link: "https://nextjs.org/" },
            { name: "React 19", link: "https://reactjs.org/" },
            { name: "TypeScript", link: "https://www.typescriptlang.org/" },
            { name: "Tailwind CSS", link: "https://tailwindcss.com/" }
        ]
    },
    {
        title: "UI Components",
        items: [
            { name: "shadcn/ui", link: "https://ui.shadcn.com/" },
            { name: "Lucide Icons", link: "https://lucide.dev/" },
            { name: "Tailwind Animations", link: "https://tailwindcss.com/docs/animation" }
        ]
    },
    {
        title: "Search and Filtering",
        items: [
            { name: "Fuse.js", link: "https://fusejs.io/" }
        ]
    }
]

export default function ReferencePage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mb-4">References</h1>
                    </div>

                    <div className="grid gap-6">
                        {REFERENCES.map((section) => (
                            <Card key={section.title}>
                                <CardHeader>
                                    <CardTitle>{section.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-2">
                                        {section.items.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                                            >
                                                <span>{item.name}</span>
                                                <ExternalLink className="h-4 w-4" />
                                            </Link>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}