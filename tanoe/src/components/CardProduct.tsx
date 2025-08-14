"use client"
import { Product } from '@/Types'
import Link from 'next/link';
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { BASE_URL } from '@/db/config/constant';
import Swal from 'sweetalert2';

const CardProduct = ({ product }: { product: Product }) => {
    const addWishlist = async ({ id }: { id: string }) => {
        const res = await fetch(`${BASE_URL}/api/wishlist`, {
            method: 'POST',
            cache: 'no-store',
            mode: 'no-cors',
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
        if (!res.ok) {
            return Swal.fire({
                title: 'res.ok',
                showConfirmButton: false,
                timer: 1500,
                icon: 'warning'
            })
        }

        return Swal.fire({
            title: 'Wishlist added',
            showConfirmButton: false,
            timer: 1500,
            icon: 'success'
        })
    }

    let currency = new Intl.NumberFormat("id-ID", {
        currency: "IDR",
        style: "currency",
    }).format(product.price);

    let currentDisc = new Intl.NumberFormat("id-ID", {
        currency: "IDR",
        style: "currency",
    }).format(product.disc);

    return (
        <>
            <div className='p-4'>
                <div className="w-full sm:w-40">
                    <div className='h-40 relative'>
                        <figure className="w-full h-full overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </figure>
                        <div onClick={() => addWishlist({ id: product._id })} className="absolute top-2 right-2">
                            <svg className='h-8 w-8'><AddShoppingCartIcon sx={{ fontSize: 24 }} className='btn btn-outline text-slate-600 hover:text-slate-200' /></svg>
                        </div>
                    </div>
                    <Link href={`/collections/${product.slug}`}>
                        <div className="p-2 flex flex-col">
                            <div className='text-sm font-extralight font-serif text-center'>
                                {product.name}
                            </div>
                            <div className='text-xs mt-3 font-extralight font-serif text-red-600 text-center'>
                                {currentDisc}
                            </div>
                            <div className='text-xs font-extralight font-serif line-through text-center'>
                                {currency}
                            </div>
                            <div className='text-xs font-extralight font-serif py-1 text-center'>
                                {product.excerpt}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CardProduct