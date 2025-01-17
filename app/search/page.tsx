import { Suspense } from "react"
import { SearchResults } from "./search-components"
import { SearchInput } from "./search-components"
import { SearchSkeleton } from "./loading"

export default function SearchPage() {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4 py-8 z-40">
                <Suspense fallback={<SearchSkeleton/>}>
                    <SearchResults/>
                </Suspense>
            </div>
        </div>
    )
}