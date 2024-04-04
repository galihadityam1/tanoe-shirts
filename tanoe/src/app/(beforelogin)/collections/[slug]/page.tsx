"use server"

import { BASE_URL } from '@/db/config/constant';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Page = async ({
    params,
}: {
    params: {
        slug: string,
    }
}) => {
    // console.log(params, 'ini di page');
    let { slug } = params
    let res = await fetch(`${BASE_URL}/api/products/${slug}`, {
        cache: 'no-cache'
    })    

    const result = await res.json()
    const { data } = result
    // console.log(data);

    let currency = new Intl.NumberFormat("id-ID", {
        currency: "IDR",
        style: "currency",
      }).format(data.price);

      let currentDisc = new Intl.NumberFormat("id-ID", {
        currency: "IDR",
        style: "currency",
      }).format(data.disc); 



    return (
        <>
            <div className='flex justify-center h-screen w-screen'>
                <div className='w-[70%] h-[70%] my-24 flex flex-row'>
                    <div className='flex-1'>
                        <img src={data.image} alt="" className='py-4' />
                    </div>
                    <div className=' flex-1 ml-14 flex justify-start flex-col'>
                        <div className='mx-8'>
                            <div className='py-4'>
                                {data.name}
                            </div>
                            <div className='py-4 text-blue-500'>
                                {data.tags}
                            </div>
                            <div className='py-4 flex flex-row gap-11 border-b'>
                                <div className='text-red-600'>
                                    {currentDisc}
                                </div>
                                <div className='line-through'>
                                    {currency}
                                </div>
                            </div>
                            <div className='py-4'>
                                Size:
                                <div className='py-2 gap-3 flex flex-row'>
                                    <button className='btn btn-square'>XS</button>
                                    <button className='btn btn-square'>S</button>
                                    <button className='btn btn-square'>M</button>
                                    <button className='btn btn-square'>L</button>
                                    <button className='btn btn-square'>XL</button>
                                </div>
                            </div>
                            <div className='py-4'>
                                Stok: {data.stok}
                            </div>
                            <div className='flex justify-center'>
                                <a href="">
                                    <div className='bg-blue-600 hover:bg-blue-800 rounded-xl hover:text-white'>
                                        <div className=' flex flex-row h-10 justify-center items-center w-80'>
                                            <div className='flex-1 flex justify-center'>
                                                Add to Cart
                                            </div>
                                            <div className='w-14 flex justify-center'>
                                                <AddShoppingCartIcon sx={{ fontSize: 30 }} />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='py-4'>
                                <img src="https://cdn.shopify.com/s/files/1/0019/2105/6881/files/abd.png?v=1618815626" alt="" />
                            </div>
                            <div>
                                Description:
                                <br />
                                <div className='text-sm'>
                                    {data.description}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Page