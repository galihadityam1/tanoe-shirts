"use client"
import React, { useEffect, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import CardProduct from '@/components/CardProduct';
import { Product } from '@/Types';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { BASE_URL } from '@/db/config/constant';

interface MyData {
  results: object[]
}


// ! /collection Page
const Page = ({ params, searchParams }: any) => {
  const [allProducts, setallProducts] = useState([])
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1)
  const router = useRouter()
  let url = `${BASE_URL}/api/products`
  const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const { value } = event.target

    setSearch(value)

  }

  const HandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push(`/collections?name=${search}`)
    // console.log(searchParams.name)
  }

  async function fetchData() {
    setLoading(true)
    if (searchParams.category) {
      url = `${BASE_URL}/api/products?category=${searchParams.category}`
    }

    if (searchParams.name) {
      url = `${BASE_URL}/api/products?name=${search}`
    }

    if (searchParams.disc) {
      url = `${BASE_URL}/api/products?disc=${searchParams.disc}`
    }

    if (searchParams.sleeve) {
      url = `${BASE_URL}/api/products?sleeve=${searchParams.sleeve}`
    }

    if (searchParams.createdAt) {
      url = `${BASE_URL}/api/products?createdAt=${searchParams.createdAt}`
    }

    url = `${BASE_URL}/api/products?page=${page}`

    const res = await fetch(url, {
      cache: "no-store",
    })

    const result = await res.json()
    setTotalPage(result.data[0].totalPages)

    if (result.data[0].results) {
      let newData = result.data[0].results
      setallProducts([...allProducts, ...newData] as any)
      setPage(page + 1)
    } else {
      setallProducts(result.data)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [searchParams])

  useEffect(() => {
    const handleScroll = (event: any) => {
      event.preventDefault()
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      ) {
        return;
      }
      if (page > totalPage) {
        return
      }
      fetchData();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, page]);

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
            <li><Link href="/collections?createdAt=new" className='text-sm font-thin'>new item</Link></li>
            <li><Link href="/collections?createdAt=old" className='text-sm font-thin'>old item</Link></li>
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
                <li><Link href='/collections?category=flannel' className='text-sm font-thin'>flannel</Link></li>
                <li><Link href='/collections?category=polo' className='text-sm font-thin'>polo</Link></li>
                <li><Link href='/collections?category=basic' className='text-sm font-thin'>basic</Link></li>
              </ul>
            </div>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="border-b m-1 font-thin w-56 h-10 text-sm flex justify-between p-2">Product Type <ExpandMoreIcon className='font-thin' /></div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/collections?sleeve=long" className='text-sm font-thin'>long sleeve</Link></li>
                <li><Link href="/collections?sleeve=short" className='text-sm font-thin'>short sleeve</Link></li>
              </ul>
            </div>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="border-b m-1 font-thin w-56 h-10 text-sm flex justify-between p-2">Price <ExpandMoreIcon className='font-thin' /></div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href='/collections?disc=low' className='text-sm font-thin'>high to low</Link></li>
                <li><Link href='/collections?disc=high' className='text-sm font-thin'>low to high</Link></li>
              </ul>
            </div>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="border-b m-1 font-thin w-56 h-10 text-sm flex justify-between p-2">Search <SearchIcon className='font-thin' /></div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <form onSubmit={HandleSubmit}>
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" onChange={HandleChange} value={search} name='name' />

                  </form>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div className='flex-1 border justify-center'>
          <div className="grid grid-cols-6 gap-6 w-full justify-center">

            {/* Card Section */}
            {allProducts && allProducts.map((product: Product, i: any) => (
              <CardProduct product={product} key={i} />
            ))}

            {loading && <p>Loading....</p>}

          </div>
        </div>
      </div>
    </>
  )
}

export default Page