import CarouselHome from "@/components/CarouselHome";
import CategoryCard from "@/components/CategoryCard";
import TagLine from "@/components/TagLine";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-full">
        <CarouselHome />
        <div className="flex justify-center">
          <a href="collections" className="-mt-28">
            <div className="border border-black rounded-lg">
              <button className="btn glass z-50">Shop Now</button>
            </div>
          </a>
        </div>
      </div>
      <TagLine />
      <CategoryCard />
    </>
  );
}
