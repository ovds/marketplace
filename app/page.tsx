import { Button } from "@/components/ui/button"
import Link from "next/link"
import {login} from "@/lib/actions/auth";


export default function Home() {
    return (
        <div className="h-screen inset-0 flex relative overflow-y-hidden">
            <div className="absolute inset-0">
                <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-200/50 to-purple-200/50 dark:from-blue-900/50 dark:to-purple-900/50 rounded-full blur-3xl top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 animate-blob" />
                <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-purple-200/50 to-pink-200/50 dark:from-purple-900/50 dark:to-pink-900/50 rounded-full blur-3xl bottom-1/4 right-1/3 animate-blob animation-delay-2000" />
            </div>
            <div className="container mx-auto px-4 flex justify-center items-center relative z-10 -mt-20">
                <div className="max-w-3xl mx-auto text-center m-auto">
                    <h1 className="text-6xl font-bold mb-6">
                        Marketplace
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                        Your one-stop destination for buying and selling products
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button asChild>
                            <Link href="/search">
                                Start Searching
                            </Link>
                        </Button>
                        <Button variant="outline" asChild >
                            <Link href="/login">
                                Login
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}