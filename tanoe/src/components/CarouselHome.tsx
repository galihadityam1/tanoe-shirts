"use client"
import React, { useState } from 'react'

const CarouselHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    "https://tenuedeattire.com/cdn/shop/files/Clearance-Sale-Collection-Desktop.jpg?v=1711938002&width=3000",
    "https://tenuedeattire.com/cdn/shop/files/Le-Ramdane-Collection-Desktop.jpg?v=1710819658&width=3200",
    "https://tenuedeattire.com/cdn/shop/files/Tenue-de-Attire-X-Telkomsel-Desktop.jpg?v=1707791440&width=3200"
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  return (
    <div className="carousel carousel-center space-x-4 bg-neutral rounded-box w-full h-full border border-black relative">
      <div className="carousel-item w-full">
        <img
          src={images[currentIndex]}
          className="rounded-box w-full object-cover"
          alt="carousel image"
        />
      </div>

      {/* Left and Right Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2 z-50"
        onClick={prevSlide}
      >
        &lt;
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2 z-50"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  )
}

export default CarouselHome
