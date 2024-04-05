"use client"
import React, { useEffect } from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { BASE_URL } from '@/db/config/constant';
import { redirect, useRouter } from 'next/navigation';
import { fetchWishList } from '@/actions/user';
// import { cookies } from 'next/headers';

const Page = () => {
    const router = useRouter()

    useEffect(() => {
        fetchWishList()
    },[])
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
                    <div className='border w-full flex flex-row gap-5 rounded-xl border-slate-400'>
                        <div className='w-48 h-48'>
                            <img src="https://tenuedeattire.com/cdn/shop/products/TDACMT022024165_1_b77d99ab-9bd7-49d1-9989-b99ce76ac70c.jpg?v=1710324581&width=1400" className='rounded-xl' />
                        </div>
                        <div className='flex-1 mt-3 flex-col gap-2'>
                            <div className='flex flex-row h-20 justify-start items-center'>
                                <div className='flex-1  text-xl'>
                                    nama produk
                                </div>
                                <div className=' w-48 text-center'>
                                    Rp. 22.000
                                </div>
                            </div>
                            <div className='flex flex-row gap-3'>
                                <div className=' rounded'>
                                    Jumlah: 99
                                </div>
                                <div>
                                    <DeleteRoundedIcon className='text-red-500' />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card section end */}

                    <div className='border w-full mt-4 rounded-xl flex-row p-4 flex border-slate-600'>
                        <div className='flex-1 flex'>
                            Total :
                            <span className='text-red-500 ml-1'>
                                Rp. 100.000
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