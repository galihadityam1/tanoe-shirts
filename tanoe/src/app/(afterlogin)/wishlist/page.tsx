"use client"
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '@/db/config/constant';
import { fetchWishList } from '@/actions/user';
import { Product } from '@/Types';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Swal from 'sweetalert2';
import Link from 'next/link';

const Page = () => {
    const [wishlist, setWishlist] = useState<Product[]>([]);
    let res = 0;

    // Calculate total price of items in the wishlist
    const total = () => {
        wishlist.map((el: Product) => {
            res += el.disc;
        })
    }

    total();
    let currency = new Intl.NumberFormat("id-ID", {
        currency: "IDR",
        style: "currency",
    }).format(res);

    let currentDisc: string;
    let stringprice: string;
    wishlist.forEach((product: Product) => {
        currentDisc = new Intl.NumberFormat("id-ID", {
            currency: "IDR",
            style: "currency",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(product.disc);
        product.stringdisc = currentDisc;
        stringprice = new Intl.NumberFormat("id-ID", {
            currency: "IDR",
            style: "currency",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(product.price);
        product.stringprice = stringprice;
    })

    async function fetchData() {
        try {
            let data = await fetchWishList()
            const { detail } = data
            setWishlist(detail)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

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
                <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] flex flex-col justify-start items-center py-8'>
                    <div className='mb-6 w-full border-b flex justify-center border-slate-600'>
                        <div className='text-3xl mb-4'>
                            WishList
                        </div>
                    </div>

                    {/* Card Section */}
                    {wishlist && wishlist.map((product: Product, i: number) => (
                        <div key={i} className='border w-full flex flex-col md:flex-row gap-5 rounded-xl border-slate-400 mt-6 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <div className='w-full sm:w-48 h-48'>
                                <img src={product.image} className='rounded-xl w-full h-full object-cover' alt={product.name} />
                            </div>
                            <div className='flex-1 flex flex-col gap-4'>
                                {/* Product Name and Price */}
                                <div className='flex flex-col md:flex-row justify-between items-start gap-2'>
                                    <Link href={`/collections/${product.slug}`} className='group'>
                                        <div className='text-xl font-semibold text-blue-800 group-hover:text-blue-600 transition-all duration-200'>
                                            {product.name}
                                        </div>
                                    </Link>
                                    <div className='text-lg font-semibold text-red-600'>
                                        <span className='text-sm text-gray-500 line-through'>
                                            {product.stringprice}
                                        </span>
                                        <div className='text-xl'>
                                            {product.stringdisc}
                                        </div>
                                    </div>
                                </div>
                                {/* Stock and Delete button */}
                                <div className='flex flex-row gap-3 items-center'>
                                    <div className='rounded bg-gray-200 px-3 py-1 text-sm text-gray-700'>
                                        Stock: {product.stok}
                                    </div>
                                    <button onClick={() => DeleteWishList({ id: product._id })} className="text-red-500 hover:text-red-700 transition-all duration-200">
                                        <DeleteRoundedIcon />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Total and Checkout Section */}
                    <div className='border w-full mt-8 rounded-xl flex justify-between items-center p-4 border-slate-600'>
                        <div className='flex-1 text-lg font-semibold'>
                            Total:
                            <span className='text-red-500 ml-1'>
                                {currency}
                            </span>
                        </div>
                        <button className='btn btn-primary'>Checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page