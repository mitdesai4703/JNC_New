import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Desktop Image */}
      <img
        src={assets.accImg}
        alt="Ice Pops Banner"
        className="w-full hidden md:block h-[500px] object-cover"
      />

      {/* Mobile Image */}
      <img
        src={assets.accImg}
        alt="Ice Pops Banner"
        className="w-full md:hidden h-[300px] object-cover"
      />

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />

      {/* Text & Buttons */}
      <div className="absolute inset-0 z-20 flex flex-col items-center md:items-start justify-end md:justify-center px-4 sm:px-12 md:px-24 lg:px-32 pb-16 md:pb-0">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center md:text-left text-white max-w-[90%] md:max-w-[800px] leading-tight drop-shadow-2xl">
          Chill Out with Every Bite – Try Our Juicy Ice Pops!
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 font-medium">
          <Link
            to="/products"
            className="group flex items-center gap-2 px-6 py-3 rounded bg-gradient-to-r from-yellow-300 to-amber-500 hover:from-amber-400 hover:to-yellow-600 text-red-700 hover:text-white transition-all duration-300 shadow-xl"
          >
            🍧 Shop Now
          </Link>

          <Link
            to="/products"
            className="group flex items-center gap-2 px-6 py-3 rounded border border-white text-white hover:bg-white hover:text-red-500 transition-all duration-300"
          >
            🔥 Explore Deals
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
