import React from 'react'

const CarouselHome = () => {
  return (
    <>
      <div className="carousel carousel-center space-x-4 bg-neutral rounded-box w-full h-full border border-black">
        <div className="carousel-item w-full">
          <img src="https://tenuedeattire.com/cdn/shop/files/Clearance-Sale-Collection-Desktop.jpg?v=1711938002&width=3000" className="rounded-box w-full" />
        </div>
        <div className="carousel-item w-full">
          <img src="https://tenuedeattire.com/cdn/shop/files/Le-Ramdane-Collection-Desktop.jpg?v=1710819658&width=3200" className="rounded-box w-full" />
        </div>
        <div className="carousel-item w-full">
          <img src="https://tenuedeattire.com/cdn/shop/files/Tenue-de-Attire-X-Telkomsel-Desktop.jpg?v=1707791440&width=3200" className="rounded-box w-full" />
        </div>
      </div>
    </>
  )
}

export default CarouselHome