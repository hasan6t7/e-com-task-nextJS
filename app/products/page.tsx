"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { ShoppingCart, Filter, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useCart } from "@/context/cart-context";

interface Product {
  id: number;
  productName: string;
  price: number;
  rating: number;
  totalReviews: number;
  mainImage: string;
  colors: string[];
  inStock: boolean;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [displayCount, setDisplayCount] = useState(8);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("/api/products");
      setProducts(response.data);
    } catch (err) {
      setError("Failed to load products. Please try again later.");
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: Product) => {
     addToCart(product, 1);
    alert(`${product.productName} added to cart!`);
  };

  const displayedProducts = products.slice(0, displayCount);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) =>
          star <= Math.floor(rating) ? (
            <AiFillStar key={star} className="w-4 h-4 text-yellow-400" />
          ) : (
            <AiOutlineStar key={star} className="w-4 h-4 text-gray-300" />
          ),
        )}
      </div>
    );
  };

  const getBadge = (index: number) => {
    if (index % 4 === 0) return { text: "HOT", color: "bg-red-500" };
    if (index % 4 === 2) return { text: "NEW", color: "bg-green-500" };
    return null;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1163CF] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={fetchProducts}
            className="px-6 py-2 bg-[#1163CF] text-white rounded hover:bg-[#0e50b0] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-semibold ">
              All Products{" "}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">Filters</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <span className="text-gray-700">Sort By</span>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayedProducts.map((product, index) => {
            const badge = getBadge(index);

            return (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <Link className="cursor-pointer" href={`/products/${product.id}`}>
                
                <div className="relative aspect-square bg-gray-100">
                  {badge && (
                    <span
                      className={`absolute top-3 left-3 ${badge.color} text-white text-xs font-semibold px-2 py-1 rounded z-10`}
                    >
                      {badge.text}
                    </span>
                  )}

                  <Image
                    src={product.mainImage}
                    alt={product.productName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                </Link>

                <div className="p-4">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-[#1163CF] hover:bg-[#0e50b0] text-white py-2.5 rounded-md font-medium text-sm flex items-center justify-center gap-2 mb-3 transition-colors cursor-pointer"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add To Cart
                  </button>

                  <Link className="cursor-pointer" href={`/products/${product.id}`}>
                    <h3 className="font-semibold text-gray-900 mb-2 hover:text-[#1163CF] transition-colors line-clamp-1">
                      {product.productName}
                    </h3>
                  </Link>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-500 font-bold text-lg">
                      ${product.price}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      ${(product.price * 1.2).toFixed(2)}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    {renderStars(product.rating)}
                    <span className="text-gray-500 text-sm">
                      ({product.totalReviews})
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {products.length > displayCount && (
          <div className="text-center">
            <button
              onClick={() => setDisplayCount(products.length)}
              className="px-12 py-3 bg-[#1163CF] hover:bg-[#0e50b0] text-white font-semibold rounded-md transition-colors"
            >
              View All
            </button>
          </div>
        )}

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-lg transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
