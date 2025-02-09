import { Suspense } from "react"
import { SearchResults } from "./search-components"
import { SearchSkeleton } from "./loading"

export default function SearchPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-8 z-40 ">
                <Suspense fallback={<SearchSkeleton/>}>
                    <SearchResults/>
                </Suspense>
            </div>
        </div>
    )
}