import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardProduct from '@/components/CardProduct';
import { Product } from '@/Types';


// ! /collection Page
const page = async () => {
  const res = await fetch('http://localhost:3000/api/products', {
    cache: "no-store"
  })
  const datas = await res.json()
  const allProducts = datas.data



  return (
    <>
      {/* Image */}
      <div className='h-full'>
        <img src="https://tenuedeattire.com/cdn/shop/files/Tenue-de-Attire-Everyday-Flannel-2-Collection-Page-Desktop.jpg?v=1710350656&width=3200" />
      </div>

      {/* Collumn Sort By */}
      <div className='flex flex-row h-12 justify-center mt-4 font-thin text-base'>
        <div className='border flex-1 justify-center items-center flex'>
          Collections
        </div>
        <div className='border w-28 justify-center flex items-center dropdown dropdown-end'>
          <div tabIndex={0} className='text-slate-950' role='button'>
            Sort By <ExpandMoreIcon />
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a className='text-sm font-thin'>new item</a></li>
            <li><a className='text-sm font-thin'>old item</a></li>
          </ul>
        </div>
      </div>

      {/* Card and Side Tab */}
      <div className='flex flex-row px-10 py-6'>
        <div className='w-72 flex justify-center border py-14'>
          <div className='flex flex-col gap-4'>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="border-b m-1 font-thin w-56 h-10 text-sm flex justify-between p-2">Category <ExpandMoreIcon className='font-thin' /></div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href='/collections/flanel' className='text-sm font-thin'>flanel</a></li>
                <li><a href='/collections/polo' className='text-sm font-thin'>polo</a></li>
                <li><a href='/collections/basic' className='text-sm font-thin'>basic</a></li>
              </ul>
            </div>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="border-b m-1 font-thin w-56 h-10 text-sm flex justify-between p-2">Product Type <ExpandMoreIcon className='font-thin' /></div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a className='text-sm font-thin'>long sleeve</a></li>
                <li><a className='text-sm font-thin'>short sleeve</a></li>
              </ul>
            </div>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="border-b m-1 font-thin w-56 h-10 text-sm flex justify-between p-2">Price <ExpandMoreIcon className='font-thin' /></div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a className='text-sm font-thin'>high to low</a></li>
                <li><a className='text-sm font-thin'>low to high</a></li>
              </ul>
            </div>

          </div>
        </div>
        <div className='flex-1 border justify-center'>
          <div className="grid grid-cols-6 gap-6 w-full justify-center">

            {allProducts && allProducts.map((product: Product, i: any) => (
              <CardProduct product={product} key={i}/>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}

export default page