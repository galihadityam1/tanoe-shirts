import { Product, User } from '@/Types'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import React from 'react'

const CardWishlist = ({product, user}: {product: Product, user: User}) => {
    let currentDisc = new Intl.NumberFormat("id-ID", {
        currency: "IDR",
        style: "currency",
    }).format(product.disc);
    return (
        <>
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
                            Jumlah: {user?.wishlist.length}
                        </div>
                        <div>
                            <DeleteRoundedIcon className='text-red-500' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardWishlist