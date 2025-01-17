import { Suspense } from "react"
import { SearchResults } from "./search-components"
import { SearchInput } from "./search-components"
import { SearchSkeleton } from "./loading"

export default function SearchPage() {
    return (
        <div className="min-h-screen">
            <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/50 backdrop-blur-md border-b">
                <div className="container mx-auto px-4 py-4">
                    <SearchInput/>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8 z-40">
                <Suspense fallback={<SearchSkeleton/>}>
                    <SearchResults/>
                </Suspense>
            </div>
        </div>
    )
}