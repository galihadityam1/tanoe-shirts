"use client"
import { BASE_URL } from '@/db/config/constant'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie'
// import { submitAction } from '@/actions/user'


// ! /login page
const Page = () => {
    const router = useRouter()
    const cookies = new Cookies()

    async function submitAction(formData: FormData) {
        const email = formData.get('email')
        const password = formData.get('password')
        // console.log(email, password);
        if (!email) {
            return Swal.fire({
                title: 'email required',
                showConfirmButton: false,
                timer: 1500,
                icon: 'warning'
            })
        }
        if (!password) {
            return Swal.fire({
                title: 'password required',
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
            <div className='h-full flex flex-col items-center'>
                <div className='w-[25%] flex flex-col gap-3 justify-center items-center my-40'>
                    <div className='text-2xl'>
                        Login
                    </div>
                    <div>
                        Enter your email and password to login:
                    </div>
                    <div className='w-full flex flex-col justify-center items-center gap-3'>
                        <form action={submitAction}>
                            <div className='w-full'>
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                    <input type="text" className="grow" name='email' placeholder="Email" />
                                </label>
                            </div>
                            <div className='w-full'>
                                <label className="input input-bordered flex items-center gap-2 my-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                    <input type="password" className="grow" name='password' placeholder='********' />
                                </label>
                            </div>
                            <div className='w-full'>
                                <button className="btn w-full bg-blue-900 text-white hover:text-black" type='submit'>Login</button>
                            </div>
                        </form>
                        <div>
                            -----------------
                            ::
                            OR
                            ::
                            -----------------
                        </div>
                        <div className="w-full flex gap-2">
                            <button className="bg-blue-600 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-blue-700 duration-100 ease-in-out">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="w-5"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 1024 1024"
                                >
                                    <path
                                        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6c44.2 0 82.1 3.3 93.2 4.8v107.9z"
                                        fill="currentColor"
                                    />
                                </svg>
                                Sign-in with Facebook
                            </button>
                            <button className="bg-blue-400 text-white w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-red-600 duration-100 ease-in-out">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="w-5"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                >
                                    <g fill="none">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"
                                            fill="currentColor"
                                        />
                                    </g>
                                </svg>
                                Sign-in with Google
                            </button>
                        </div>
                    </div>
                    <div className='w-full text-center'>
                        Dont You Have an Account? <a className='text-blue-600 hover:underline' href='/sign-up'>Sign Up</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page