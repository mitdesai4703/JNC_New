import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext();

  return product && (
    <div
      onClick={() => {
        navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
        scrollTo(0, 0);
      }}
      className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition p-4 cursor-pointer w-full max-w-[260px]"
    >
      {/* Product Image */}
      <div className="w-full h-[160px] flex items-center justify-center overflow-hidden mb-4">
        <img
          src={product.image[0]}
          alt={product.name}
          className="max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Category & Name */}
      <div className="text-sm text-gray-500 mb-1">{product.category}</div>
      <div className="font-semibold text-lg text-gray-800 truncate">{product.name}</div>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src={i < 4 ? assets.star_icon : assets.star_dull_icon}
            alt="star"
            className="w-[14px] h-[14px]"
          />
        ))}
        <span className="text-sm text-gray-500 ml-1">(4)</span>
      </div>

      {/* Price and Cart Controls */}
      <div className="flex items-end justify-between mt-4">
        <p className="text-red-400 font-bold text-base">
          {currency}{product.offerPrice}
          <span className="text-sm text-gray-400 line-through ml-2">{currency}{product.price}</span>
        </p>

        {/* Add / Quantity Control */}
        <div onClick={(e) => e.stopPropagation()}>
          {!cartItems[product._id] ? (
            <button
              onClick={() => addToCart(product._id)}
              className="text-sm px-3 py-1.5 border border-red-400 text-white rounded-md bg-red-700 hover:bg-red-400 cursor-pointer  hover:text-white transition"
            >
              Add
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-red-400 px-2 py-1 rounded-md">
              <button onClick={() => removeFromCart(product._id)} className="text-lg font-bold">−</button>
              <span className="w-5 text-center">{cartItems[product._id]}</span>
              <button onClick={() => addToCart(product._id)} className="text-lg font-bold">+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
