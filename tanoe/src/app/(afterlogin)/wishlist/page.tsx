"use client"
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '@/db/config/constant';
import { redirect, useRouter } from 'next/navigation';
import { fetchWishList } from '@/actions/user';
import { Product } from '@/Types';
import CardWishlist from '@/components/CardWishlist';
// import { cookies } from 'next/headers';

const Page = () => {
    const [wishlist, setWishlist] = useState([])
    const [user, setUser] = useState({
        _id: "",
        name: "",
        username: "",
        email: "",
        wishlist: [],
        detail: []
    })

    let res = 0
    const total = () => {
        wishlist.map((el: Product) => {
            res += el.disc
        })
    }

    total()
    let currency = new Intl.NumberFormat("id-ID", {
        currency: "IDR",
        style: "currency",
    }).format(res);
    // const router = useRouter()
    async function fetchData() {
        try {
            // Perform asynchronous tasks
            let data = await fetchWishList()
            // console.log(data);
            const { detail } = data
            setWishlist(detail)
            setUser(data)

        } catch (error) {
            // Handle errors
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className='flex justify-center min-h-screen'>
                <div className='w-[50%] flex flex-col justify-start items-center py-8'>
                    <div className='mb-4 w-full border-b flex justify-center border-slate-600'>
                        <div className='text-3xl mb-4'>
                            WishList
                        </div>
                    </div>


                    {/* Card Section */}
                    
                    {wishlist && wishlist.map((product: Product, i: number) => (
                        <CardWishlist product={product} key={i} user={user}/>
                    ))}
                    {/* Card section end */}

                    <div className='border w-full mt-4 rounded-xl flex-row p-4 flex border-slate-600'>
                        <div className='flex-1 flex'>
                            Total :
                            <span className='text-red-500 ml-1'>
                                {currency}
                            </span>
                        </div>
                        <div>
                            checkout
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
