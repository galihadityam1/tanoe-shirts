import CarouselHome from '@/components/CarouselHome'
import React from 'react'


// !Collection Page
const page = () => {
  return (
    <>
      {/* Image */}
      <div className='h-full'>
        <img src="https://tenuedeattire.com/cdn/shop/files/Tenue-de-Attire-Everyday-Flannel-2-Collection-Page-Desktop.jpg?v=1710350656&width=3200" className="rounded-box w-full" />
      </div>

      {/* Collumn Sort By */}
      <div className='flex flex-row h-12 justify-center mt-4 font-thin text-base'>
        <div className='border flex-1 justify-center items-center flex'>
          Collections
        </div>
        <div className='border w-28 justify-center flex items-center'>
          Sort By
        </div>
      </div>

      {/* Card and Side Tab */}
      <div className='flex flex-row p-10'>
        <div className='w-72 flex justify-center border'>
          Side Tab
        </div>
        <div className='flex-1 border justify-center'>
          <div className="grid grid-cols-6 gap-6 w-full justify-center">
            {/* Card Section */}
            <div className='p-4'>
              <div className="w-40 h-80">
                <div className='h-40'>
                  <figure><img src="https://tenuedeattire.com/cdn/shop/products/TDACMT022024154_1_9e4c383e-b50b-44b5-bed0-bedb6f84fc19.jpg?v=1710804008&width=1400" /></figure>
                </div>
                <div className="p-2  flex flex-col">
                  <div className='text-sm font-extralight font-serif'>
                    Nama Baju
                  </div>
                  <div className='text-xs mt-3 font-extralight font-serif text-red-600'>
                    IDR Harga Diskon
                  </div>
                  <div className='text-xs font-extralight font-serif line-through'>
                    IDR Harga
                  </div>
                </div>
              </div>
            </div>
            <div className='p-4'>
              <div className=" w-40 h-80">
                <div className=' h-40'>
                  <figure><img src="https://tenuedeattire.com/cdn/shop/products/TDACMT022024148_1_9e974290-4b66-4068-9527-e62ff253640d.jpg?v=1710803985&width=1400" /></figure>
                </div>
                <div className="p-2  flex flex-col">
                  <div className='text-sm font-extralight font-serif'>
                    Nama Baju
                  </div>
                  <div className='text-xs mt-3 font-extralight font-serif text-red-600'>
                    IDR Harga Diskon
                  </div>
                  <div className='text-xs font-extralight font-serif line-through'>
                    IDR Harga
                  </div>
                </div>
                <div className="card-body">
                </div>
              </div>
            </div>
            <div className='p-4'>
              <div className=" w-40 h-80">
                <div className=' h-40'>
                  <figure><img src="https://tenuedeattire.com/cdn/shop/products/TDACMT022024152_1_2712c90a-ce81-480b-9f3c-ee7f2fa65c1d.jpg?v=1710804001&width=1400" /></figure>
                </div>
                <div className="p-2  flex flex-col">
                  <div className='text-sm font-extralight font-serif'>
                    Nama Baju
                  </div>
                  <div className='text-xs mt-3 font-extralight font-serif text-red-600'>
                    IDR Harga Diskon
                  </div>
                  <div className='text-xs font-extralight font-serif line-through'>
                    IDR Harga
                  </div>
                </div>
                <div className="card-body">
                </div>
              </div>
            </div>
            <div className='p-4'>
              <div className=" w-40 h-80">
                <div className=' h-40'>
                  <figure><img src="https://tenuedeattire.com/cdn/shop/products/TDACMT022024138_1_4ac5c455-20f2-4ae4-a4c8-0820dcb42960.jpg?v=1710803952&width=1400" /></figure>
                </div>
                <div className="p-2  flex flex-col">
                  <div className='text-sm font-extralight font-serif'>
                    Nama Baju
                  </div>
                  <div className='text-xs mt-3 font-extralight font-serif text-red-600'>
                    IDR Harga Diskon
                  </div>
                  <div className='text-xs font-extralight font-serif line-through'>
                    IDR Harga
                  </div>
                </div>
                <div className="card-body">
                </div>
              </div>
            </div>
            <div className='p-4'>
              <div className=" w-40 h-80">
                <div className=' h-40'>
                  <figure><img src="https://tenuedeattire.com/cdn/shop/products/TDACMT022024066_1_936c4406-4b2b-443b-8147-6f8fb6f4ba6f.jpg?v=1710804071&width=1400" /></figure>
                </div>
                <div className="p-2  flex flex-col">
                  <div className='text-sm font-extralight font-serif'>
                    Nama Baju
                  </div>
                  <div className='text-xs mt-3 font-extralight font-serif text-red-600'>
                    IDR Harga Diskon
                  </div>
                  <div className='text-xs font-extralight font-serif line-through'>
                    IDR Harga
                  </div>
                </div>
                <div className="card-body">
                </div>
              </div>
            </div>
            <div className='p-4'>
              <div className=" w-40 h-80">
                <div className=' h-40'>
                  <figure><img src="https://tenuedeattire.com/cdn/shop/products/TDACMT022024146_1_0e7040ed-ac0e-4a76-ac49-1645ec35300d.jpg?v=1710803978&width=1400" /></figure>
                </div>
                <div className="p-2  flex flex-col">
                  <div className='text-sm font-extralight font-serif'>
                    Nama Baju
                  </div>
                  <div className='text-xs mt-3 font-extralight font-serif text-red-600'>
                    IDR Harga Diskon
                  </div>
                  <div className='text-xs font-extralight font-serif line-through'>
                    IDR Harga
                  </div>
                </div>
                <div className="card-body">
                </div>
              </div>
            </div>
            <div className='p-4'>
              <div className=" w-40 h-80">
                <div className='h-40'>
                  <figure><img src="https://tenuedeattire.com/cdn/shop/products/TDACMT022024154_1_9e4c383e-b50b-44b5-bed0-bedb6f84fc19.jpg?v=1710804008&width=1400" /></figure>
                </div>
                <div className="p-2  flex flex-col">
                  <div className='text-sm font-extralight font-serif'>
                    Nama Baju
                  </div>
                  <div className='text-xs mt-3 font-extralight font-serif text-red-600'>
                    IDR Harga Diskon
                  </div>
                  <div className='text-xs font-extralight font-serif line-through'>
                    IDR Harga
                  </div>
                </div>
                <div className="card-body">
                </div>
              </div>
            </div>
            <div className='p-4'>
              <div className=" w-40 h-80">
                <div className=' h-40'>
                  <figure><img src="https://tenuedeattire.com/cdn/shop/products/TDACMT022024148_1_9e974290-4b66-4068-9527-e62ff253640d.jpg?v=1710803985&width=1400" /></figure>
                </div>
                <div className="p-2  flex flex-col">
                  <div className='text-sm font-extralight font-serif'>
                    Nama Baju
                  </div>
                  <div className='text-xs mt-3 font-extralight font-serif text-red-600'>
                    IDR Harga Diskon
                  </div>
                  <div className='text-xs font-extralight font-serif line-through'>
                    IDR Harga
                  </div>
                </div>
                <div className="card-body">
                </div>
              </div>
            </div>
            <div className='p-4'>
              <div className=" w-40 h-80">
                <div className=' h-40'>
                  <figure><img src="https://tenuedeattire.com/cdn/shop/products/TDACMT022024152_1_2712c90a-ce81-480b-9f3c-ee7f2fa65c1d.jpg?v=1710804001&width=1400" /></figure>
                </div>
                <div className="p-2  flex flex-col">
                  <div className='text-sm font-extralight font-serif'>
                    Nama Baju
                  </div>
                  <div className='text-xs mt-3 font-extralight font-serif text-red-600'>
                    IDR Harga Diskon
                  </div>
                  <div className='text-xs font-extralight font-serif line-through'>
                    IDR Harga
                  </div>
                </div>
                <div className="card-body">
                </div>
              </div>
            </div>
            <div className='p-4'>
              <div className=" w-40 h-80">
                <div className=' h-40'>
                  <figure><img src="https://tenuedeattire.com/cdn/shop/products/TDACMT022024138_1_4ac5c455-20f2-4ae4-a4c8-0820dcb42960.jpg?v=1710803952&width=1400" /></figure>
                </div>
                <div className="p-2  flex flex-col">
                  <div className='text-sm font-extralight font-serif'>
                    Nama Baju
                  </div>
                  <div className='text-xs mt-3 font-extralight font-serif text-red-600'>
                    IDR Harga Diskon
                  </div>
                  <div className='text-xs font-extralight font-serif line-through'>
                    IDR Harga
                  </div>
                </div>
                <div className="card-body">
                </div>
              </div>
            </div>
            <div className='p-4'>
              <div className=" w-40 h-80">
                <div className=' h-40'>
                  <figure><img src="https://tenuedeattire.com/cdn/shop/products/TDACMT022024066_1_936c4406-4b2b-443b-8147-6f8fb6f4ba6f.jpg?v=1710804071&width=1400" /></figure>
                </div>
                <div className="p-2  flex flex-col">
                  <div className='text-sm font-extralight font-serif'>
                    Nama Baju
                  </div>
                  <div className='text-xs mt-3 font-extralight font-serif text-red-600'>
                    IDR Harga Diskon
                  </div>
                  <div className='text-xs font-extralight font-serif line-through'>
                    IDR Harga
                  </div>
                </div>
                <div className="card-body">
                </div>
              </div>
            </div>
            <div className='p-4'>
              <div className=" w-40 h-80">
                <div className=' h-40'>
                  <figure><img src="https://tenuedeattire.com/cdn/shop/products/TDACMT022024146_1_0e7040ed-ac0e-4a76-ac49-1645ec35300d.jpg?v=1710803978&width=1400" /></figure>
                </div>
                <div className="p-2  flex flex-col">
                  <div className='text-sm font-extralight font-serif'>
                    Nama Baju
                  </div>
                  <div className='text-xs mt-3 font-extralight font-serif text-red-600'>
                    IDR Harga Diskon
                  </div>
                  <div className='text-xs font-extralight font-serif line-through'>
                    IDR Harga
                  </div>
                </div>
                <div className="card-body">
                </div>
              </div>
            </div>



            {/* Card Section done */}
          </div>
        </div>
      </div>
    </>
  )
}

export default page