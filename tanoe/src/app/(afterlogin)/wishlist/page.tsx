"use client"
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '@/db/config/constant';
import { redirect, useRouter } from 'next/navigation';
import { fetchWishList } from '@/actions/user';
import { Product } from '@/Types';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Swal from 'sweetalert2';

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

    // console.log(wishlist);

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

    let currentDisc: string;
    wishlist.map((product: Product) => {
        currentDisc = new Intl.NumberFormat("id-ID", {
            currency: "IDR",
            style: "currency",
        }).format(product.disc);
    })

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
    }, [DeleteWishList])

    async function DeleteWishList({ id }: { id: string }) {
        const res = await fetch(`${BASE_URL}/api/wishlist`, {
            method: `DELETE`,
            cache: 'no-store',
            headers: {
                "Content-type": "application/json",
                Cookie: document.cookie
            },
            body: JSON.stringify({ id })
        })

        const result = await res.json()

        if (result.errMessage) {
            return Swal.fire({
                title: result.errMessage,
                showConfirmButton: false,
                timer: 1500,
                icon: 'warning'
            })
        }

        return Swal.fire({
            title: 'Wishlist deleted',
            showConfirmButton: false,
            timer: 1500,
            icon: 'success'
        })
    }

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
                        <div className='border w-full flex flex-row gap-5 rounded-xl border-slate-400 mt-3'>
                            <div className='w-48 h-48'>
                                <img src={product.image} className='rounded-xl' />
                            </div>
                            <div className='flex-1 mt-3 flex-col gap-2'>
                                <div className='flex flex-row h-20 justify-start items-center'>
                                    <div className='flex-1  text-xl'>
                                        {product.name}
                                    </div>
                                    <div className=' w-48 text-center'>
                                        {currentDisc}
                                    </div>
                                </div>
                                <div className='flex flex-row gap-3'>
                                    <div className=' rounded'>
                                        Jumlah: {product.stok}
                                    </div>
                                    <button onClick={() => DeleteWishList({ id: product._id })}>
                                        <DeleteRoundedIcon className='text-red-500' />
                                    </button>
                                </div>
                            </div>
                        </div>
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
