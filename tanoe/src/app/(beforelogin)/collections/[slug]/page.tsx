import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const page = async ({
    params,
}: {
    params: {
        slug: string,
        category: string
    }
}) => {
    console.log(params, 'ini di page');
    
    return (
        <>
            <div className='flex justify-center h-screen w-screen'>
                <div className='w-[70%] h-[70%] my-24 flex flex-row'>
                    <div className='flex-1'>
                        <img src="https://tenuedeattire.com/cdn/shop/products/TDACMT022024165_1_b77d99ab-9bd7-49d1-9989-b99ce76ac70c.jpg?v=1710324581&width=1400" alt="" className='py-4'/>
                    </div>
                    <div className=' flex-1 ml-14 flex justify-start flex-col'>
                        <div className='mx-8'>
                            <div className='py-4'>
                                Name Basic
                            </div>
                            <div className='py-4'>
                                Tags?
                            </div>
                            <div className='py-4 flex flex-row gap-11 border-b'>
                                <div>
                                    Harga diskon
                                </div>
                                <div>
                                    Harga Awal
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
                                Stok: 99
                            </div>
                            <div className='flex justify-center'>
                                <a href="">
                                    <div className='bg-blue-600 hover:bg-blue-800 rounded-xl'>
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
                                    Kemeja flanel panjang yang nyaman dipakai sepanjang hari. Terbuat dari bahan berkualitas tinggi yang lembut dan hangat. Desain yang trendi dan cocok dipadukan dengan celana jeans atau celana panjang favorit Anda.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default page