import CarouselHome from "@/components/CarouselHome";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <CarouselHome />
      <div className="h-screen border border-black flex flex-col items-center">
        <div className="text-6xl py-9 font-medium">
          We Make Cool Things for Living
        </div>
      </div>
    </>
  );
}
