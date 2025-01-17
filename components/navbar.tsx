'use client'

import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import {ModeToggle} from "@/components/mode-toggle";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {User} from "lucide-react";

export const Navbar = () => {


    return (
        <nav className="container mx-auto px-4 py-3 z-20">
            <div className="flex items-center justify-between">
                <Link href="/" className="text-xl font-bold">
                    Marketplace
                </Link>
                <div className="flex items-center gap-6">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/search" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                                        Search
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/reference" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                                        Reference
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/login" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                                        Login
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <ModeToggle/>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-background border-1 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
                                <User className="w-6 h-6 text-muted-foreground"/>
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48 bg-background">
                            {true ? (
                                    <>
                                        <DropdownMenuItem>
                                            <Link href="/profile" className="w-full text-left">
                                                Profile
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                                        >
                                            Log Out
                                        </DropdownMenuItem>
                                    </>
                                ) :
                                <>
                                    <DropdownMenuItem>
                                        <Link href="/login" className="w-full text-left">
                                            Log In
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link href="/register" className="w-full text-left">
                                            Register
                                        </Link>
                                    </DropdownMenuItem>
                                </>
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    )
}