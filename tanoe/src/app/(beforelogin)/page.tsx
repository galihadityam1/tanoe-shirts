"use server"
import { Product } from "@/Types";
import CardProduct from "@/components/CardProduct";
import CarouselHome from "@/components/CarouselHome";
import CategoryCard from "@/components/CategoryCard";
import TagLine from "@/components/TagLine";
import { BASE_URL } from "@/db/config/constant";
import Link from "next/link";

export default async function Home() {
  const res = await fetch(`${BASE_URL}/api`, {
    cache: 'no-store'
  })

  const result = await res.json()
  const product = result.data
  // console.log(product);

  return (
    <>
      {/* Carousel and button Shop */}
      <div className="h-screen">
        <div className="h-[72.5%]">
          <CarouselHome />
        </div>
        <div className="flex justify-center">
          <a href="collections" className="-mt-28">
            <div className="border border-black rounded-lg">
              <button className="btn glass z-40">Shop Now</button>
            </div>
          </a>
        </div>
      </div>

      {/* TagLine Image */}
      <TagLine />

      {/* Category List */}
      <div className="flex flex-col items-center justify-center">
        <div className="mt-6 underline text-2xl font-mono">
          Our Category.
        </div>
        <div className="-mt-6">
          <CategoryCard />
        </div>
      </div>

      {/* Card List */}
      <div className=" flex flex-col justify-center items-center">
        <div className="text-2xl font-semibold text-red-500 mb-6">
          RAMADHAN SALE !
        </div>
        <div className="grid grid-cols-5 gap-6 justify-center">
          {product && product.map((el: Product, i: number) => (
            <CardProduct product={el} key={i} />
          ))}
        </div>
        <Link href='/collections' className="mb-8 border h-10 w-64 flex justify-center items-center bg-blue-500 rounded-xl text-white hover:bg-blue-700">
          SEE MORE OUR PRODUCT
        </Link>
      </div>


    </>
  );
}
