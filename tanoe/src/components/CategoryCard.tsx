import React from 'react'

const CategoryCard = () => {
    return (
        <div className="h-full items-center justify-center flex flex-row gap-16 py-16">
            <div className="w-80">
                <a href="/collections?category=flannel">
                    <img className="rounded-xl" src="https://tenuedeattire.com/cdn/shop/files/Tenue-de-Attire-Flannel-Shirt-Category.jpg?v=1709726337&width=800" />
                </a>
            </div>
            <div className="w-80">
                <a href="/collections?category=polo">
                    <img className="rounded-xl" src="https://tenuedeattire.com/cdn/shop/files/Tenue-de-Attire-Polo-Shirt-Category.jpg?v=1709786549&width=800" />
                </a>
            </div>
            <div className="w-80">
                <a href="/collections?category=basic">
                    <img className="rounded-xl" src="https://tenuedeattire.com/cdn/shop/files/Tenue-de-Attire-Basic-Shirt-Category.jpg?v=1709726338&width=800" />
                </a>
            </div>
        </div>
    )
}

export default CategoryCard