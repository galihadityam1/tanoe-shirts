import { Product } from '@/Types'
import Link from 'next/link';
import React from 'react'

const CardProduct = ({ product }: { product: Product }) => {
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
        <Link href={`/collections/${product.slug}`}>
            <div className='p-4'>
                <div className="w-40">
                    <div className='h-40'>
                        <figure><img src={product.image} /></figure>
                    </div>
                    <div className="p-2  flex flex-col">
                        <div className='text-sm font-extralight font-serif'>
                            {product.name}
                        </div>
                        <div className='text-xs mt-3 font-extralight font-serif text-red-600'>
                            {currentDisc}
                        </div>
                        <div className='text-xs font-extralight font-serif line-through'>
                            {currency}
                        </div>
                        <div className='text-xs font-extralight font-serif py-1'>
                            {product.excerpt}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        </>
    )
}

export default CardProduct