import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

const Whistlist = () => {
    return (
        <>
            <div className="drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost btn-circle"><ShoppingBagIcon /></label>
                </div>
                <div className="drawer-side">
                    <div className="menu flex flex-col w-[25%] min-h-full bg-white border-2 border-gray-300 text-base-content">
                        {/* Sidebar content here */}
                        <div className='border-b-2 border-gray-100 w-full h-24 flex justify-between items-center px-4'>
                            <div className='text-xl'>
                                Whistlist
                            </div>
                            <div>
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay btn btn-ghost btn-circle drawer-button"><CloseSharpIcon /></label>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 mt-4 p-4'>

                            {/* card whistilist */}
                            <div className=' flex flex-row'>
                                <div className='w-32 h-32'>
                                    <img src="https://tenuedeattire.com/cdn/shop/products/TDACMT022024165_1_b77d99ab-9bd7-49d1-9989-b99ce76ac70c.jpg?v=1710324581&width=1400" />
                                </div>
                                <div className='flex flex-col py-2 px-4 justify-start text-left flex-1 gap-3'>
                                    <div>
                                        Nama Produk
                                    </div>
                                    <div className='text-xs'>
                                        Harga Disc
                                    </div>
                                    <div className='text-xs'>
                                        Jumlah
                                    </div>
                                    <div className='h-1'>
                                        <button className='btn btn-sm btn-outline text-red-500 hover:bg-red-600 hover:border-red-700'>Delete</button>
                                    </div>
                                </div>
                            </div>
                            {/* end of card wishtlist */}
                            <div className=' flex flex-row'>
                                <div className='w-32 h-32'>
                                    <img src="https://tenuedeattire.com/cdn/shop/products/TDACMT022024165_1_b77d99ab-9bd7-49d1-9989-b99ce76ac70c.jpg?v=1710324581&width=1400" />
                                </div>
                                <div className='flex flex-col py-2 px-4 justify-start text-left flex-1 gap-3'>
                                    <div>
                                        Nama Produk
                                    </div>
                                    <div className='text-xs'>
                                        Harga Disc
                                    </div>
                                    <div className='text-xs'>
                                        Jumlah
                                    </div>
                                    <div className='h-1'>
                                        <button className='btn btn-sm btn-outline text-red-500 hover:bg-red-600 hover:border-red-700'>Delete</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whistlist