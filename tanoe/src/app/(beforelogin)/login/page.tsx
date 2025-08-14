"use client"
import { BASE_URL } from '@/db/config/constant'
import { useRouter } from 'next/navigation'
import React from 'react'
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie'

// ! login page
const Page = () => {
    const router = useRouter()
    const cookies = new Cookies()

    async function submitAction(formData: FormData) {
        const email = formData.get('email')
        const password = formData.get('password')

        if (!email) {
            return Swal.fire({
                title: 'Email is required',
                showConfirmButton: false,
                timer: 1500,
                icon: 'warning'
            })
        }
        if (!password) {
            return Swal.fire({
                title: 'Password is required',
                showConfirmButton: false,
                timer: 1500,
                icon: 'warning'
            })
        }

        let res = await fetch(`${BASE_URL}/api/users/login`, {
            cache: 'no-store',
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const result = await res.json()
        if(result.error){
            return Swal.fire({
                title: result.error,
                showConfirmButton: false,
                timer: 1500,
                icon: 'warning'
            })
        }

        if (!res.ok) {
            return router.push('/login' + `?error=${result.error}`)
        }

        cookies.set("Authorization", `Bearer ${result.data.token}`)
        return router.push('/')
    }

    return (
        <>
            <div className="h-full flex flex-col items-center justify-center px-4 mt-16 mb-16">
                <div className="w-full sm:w-[90%] md:w-[50%] lg:w-[30%] bg-white shadow-lg rounded-xl p-8">
                    <div className="text-3xl font-semibold text-center text-blue-900 mb-6">
                        Login
                    </div>
                    <div className="text-center mb-4 text-gray-600">
                        Enter your email and password to login:
                    </div>
                    <form onSubmit={(e) => {e.preventDefault(); submitAction(new FormData(e.target as HTMLFormElement))}} className="flex flex-col gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="Email" 
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="********" 
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mt-4">
                            <button type="submit" className="w-full py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition">
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-6 text-sm">
                        Don't have an account? 
                        <a className="text-blue-600 hover:underline" href='/sign-up'>Sign Up</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page