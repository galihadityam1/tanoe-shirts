import CarouselHome from "@/components/CarouselHome";
import CategoryCard from "@/components/CategoryCard";
import TagLine from "@/components/TagLine";
import Image from "next/image";

export default function Home() {
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
              <button className="btn glass z-50">Shop Now</button>
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
    </>
  );
}
