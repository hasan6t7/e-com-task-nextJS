"use client";
import { useCart } from "@/context/cart-context";
import axios from "axios";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

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

const BestSellingProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [displayCount, setDisplayCount] = useState(4);
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
    toast.success(`${product.productName} added to cart!`);
  };

  const displayedProducts = [...products]
    .sort(() => Math.random() - 0.5)
    .slice(0, displayCount);

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
    <div className="mt-20">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-4xl font-semibold pb-4 border-b-5 md:border-b-9 border-[#1163CF] w-max">
          Best Selling Product
        </h1>
        <div className="flex items-center gap-3">
          {products.length > displayCount && (
            <div className="text-center">
              <button
                onClick={() => setDisplayCount((prev) => prev + 4)}
                className="px-5 py-3 bg-[#1163CF] hover:bg-[#0e50b0] text-white font-semibold rounded-md transition-colors"
              >
                View All
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayedProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <Link
                  className="cursor-pointer"
                  href={`/products/${product.id}`}
                >
                  <div className="relative aspect-square bg-gray-100">
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
                    className="w-full bg-[#1163CF] hover:bg-[#0e50b0] text-white py-2.5 rounded-md font-medium text-sm flex items-center justify-center gap-2 mb-3 transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add To Cart
                  </button>

                  <Link
                    className="cursor-pointer"
                    href={`/products/${product.id}`}
                  >
                    <h3 className="font-semibold text-gray-900 mb-2 hover:text-[#1163CF] transition-colors line-clamp-1">
                      {product.productName}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-500 font-bold text-lg">
                      ${product.price}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      ${(product.price * 1.2).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestSellingProduct;
