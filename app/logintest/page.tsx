"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {login} from "@/lib/actions/auth";

export default function LoginPage() {

    return (
        <div className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900/50 p-4">
            <Card className="w-full max-w-md -mt-20">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                        Enter your credentials to access your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Input
                            type="email"
                            placeholder="Email"
                            autoComplete="email"
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <Button
                        className="space-x-2 w-full my-auto"
                        onClick={() => login()}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.4.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.3 1.1 2.9.8.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 011.3-3.2c-.1-.3-.6-1.7.1-3.7 0 0 1-.3 3.3 1.3a11.5 11.5 0 016 0c2.4-1.6 3.3-1.3 3.3-1.3.7 2 .2 3.4.1 3.7a4.7 4.7 0 011.2 3.2c0 4.6-2.9 5.6-5.6 6 .4.3.8 1 .8 2v3c0 .3.2.7.9.6A12 12 0 0012 .5z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>Sign In with Github</span>
                    </Button>
                    <div className="text-sm text-center text-gray-600 dark:text-gray-400">
                        Don&#39;t have an account?{" "}
                        <Button variant="link" className="p-0">
                            Register here
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}