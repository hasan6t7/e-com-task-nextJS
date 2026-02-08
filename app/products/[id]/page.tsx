"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Truck,
  ChevronDown,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { AiFillStar, AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import ProCard from "@/app/Components/ProCard/ProCard";

interface Product {
  id: number;
  productName: string;
  rating: number;
  totalReviews: number;
  price: number;
  currency: string;
  mainImage: string;
  images: string[];
  colors: string[];
  inStock: boolean;
  description: string;
  specifications: {
    display: string;
    chip: string;
    memory: string;
    storage: string;
    battery: string;
    features: string;
  };
  delivery: {
    available: boolean;
    message: string;
    details: string;
  };
  ratingBreakdown: {
    "5": number;
    "4": number;
    "3": number;
    "2": number;
    "1": number;
  };
  reviews: Array<{
    id: number;
    userName: string;
    verified: boolean;
    rating: number;
    comment: string;
    date: string;
  }>;
}

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);

  useEffect(() => {
    fetchProduct();
  }, [params.id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("/api/products");
      const allProducts = response.data;
      const foundProduct = allProducts.find(
        (p: Product) => p.id === Number(params.id),
      );

      if (!foundProduct) {
        setError("Product not found");
        return;
      }

      setProduct(foundProduct);
    } catch (err) {
      setError("Failed to load product. Please try again later.");
      console.error("Error fetching product:", err);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number, size: "small" | "large" = "small") => {
    const starSize = size === "large" ? "w-7 h-7" : "w-5 h-5";
    return (
      <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        if (star <= Math.floor(rating)) {
          return <AiFillStar key={star} className={`${starSize} text-yellow-400`} />;
        } else if (star - rating <= 0.5) {
          return <AiTwotoneStar key={star} className={`${starSize} text-yellow-400`} />;
        } else {
          return <AiOutlineStar key={star} className={`${starSize} text-gray-300`} />;
        }
      })}
    </div>

    );
  };

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1163CF] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error || "Product not found"}</p>
          <button
            onClick={() => router.push("/products")}
            className="px-6 py-2 bg-[#1163CF] text-white rounded hover:bg-[#0e50b0] transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const totalRatings = Object.values(product.ratingBreakdown).reduce(
    (a, b) => a + b,
    0,
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-gray-900">
            Account
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/products" className="hover:text-gray-900">
            Products
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className=" font-medium">
            {product.productName.split(" ").slice(0, 3).join(" ")}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.images[selectedImage] || product.mainImage}
                alt={product.productName}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            {/* <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square w-24 bg-gray-100 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-[#1163CF]"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.productName} ${index + 1}`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div> */}
            <div className="pt-6 space-y-6">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-900">Quantity</span>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                      onClick={() => handleQuantityChange("decrease")}
                      className="px-3 py-2 hover:bg-gray-50"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange("increase")}
                      className="px-3 py-2 bg-[#1163CF] text-white hover:bg-[#0e50b0]"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-900">Colors:</span>
                  <div className="flex gap-2">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(index)}
                        className={`w-6 h-6 rounded-full border-2 ${
                          selectedColor === index
                            ? "border-gray-900"
                            : "border-gray-300"
                        }`}
                        style={{
                          backgroundColor:
                            color.toLowerCase() === "black"
                              ? "#000"
                              : color.toLowerCase() === "white"
                                ? "#fff"
                                : color.toLowerCase() === "silver" ||
                                    color.toLowerCase() === "starlight"
                                  ? "#C0C0C0"
                                  : color.toLowerCase() === "midnight"
                                    ? "#1a1a2e"
                                    : "#808080",
                        }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-[#1163CF] hover:bg-[#0e50b0] text-white py-3 rounded-md font-semibold transition-colors">
                  Buy Now
                </button>
                <button className="flex-1 border-2 border-gray-300 hover:bg-gray-50 text-gray-900 py-3 rounded-md font-semibold transition-colors">
                  Add To Cart
                </button>
                <button className="border-2 border-gray-300 hover:bg-gray-50 p-3 rounded-md transition-colors">
                  <Heart className="w-6 h-6 text-gray-700" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-semibold  mb-4">
              {product.productName}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              {renderStars(product.rating, "large")}
              <span className="text-gray-600">
                ({product.totalReviews} Reviews)
              </span>
              {product.inStock && (
                <span className="text-green-500">in stock</span>
              )}
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold ">
                {product.currency}
                {product.price.toFixed(2)}
              </span>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8">
              <h3 className="font-semibold  mb-3">Key Specifications</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>
                    <strong>Display:</strong> {product.specifications.display}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>
                    <strong>Chip:</strong> {product.specifications.chip}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>
                    <strong>Memory:</strong> {product.specifications.memory}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>
                    <strong>Storage:</strong> {product.specifications.storage}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>
                    <strong>Battery:</strong> {product.specifications.battery}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>
                    <strong>Other Features:</strong>{" "}
                    {product.specifications.features}
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-t pt-6 space-y-6">
              {product.delivery.available && (
                <div className="border border-gray-300 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <Truck className="w-6 h-6 text-gray-700 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {product.delivery.message}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {product.delivery.details}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="border-t pt-12 ">
          <div className="bg-[#E3F0FF] px-6 py-4 mb-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Ratings & Reviews of {product.productName}
            </h2>
          </div>

          <div className="flex flex-col gap-12">
            <div className="w-full md:w-1/2">
              <div className=" mb-6">
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  {product.rating}/5
                </div>
                {renderStars(product.rating, "large")}
                <p className="text-gray-600 mt-2">
                  {product.totalReviews} Reviews
                </p>
              </div>

              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((star) => {
                  const count =
                    product.ratingBreakdown[
                      star.toString() as keyof typeof product.ratingBreakdown
                    ];
                  const percentage = (count / totalRatings) * 100;

                  return (
                    <div key={star} className="flex items-center gap-3">
                      <div className="flex items-center gap-1 w-6">
                        <svg
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-yellow-400 h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-8 text-right">
                        {count}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="">
              <div className=" mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Product Reviews
                </h3>
                
              </div>

              <div className="space-y-6">
                {product.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b pb-6 last:border-b-0"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {renderStars(review.rating, "small")}
                      <span className="text-sm text-gray-500">
                        {review.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-medium text-gray-900">
                        {review.userName}
                      </span>
                      {review.verified && (
                        <CheckCircle className="w-4 h-4 text-green-500 fill-green-500" />
                      )}
                    </div>

                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="#"
                  className="text-[#1163CF] hover:underline font-medium inline-flex items-center gap-1"
                >
                  You May Also Like
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProCard />
    </div>
  );
}
