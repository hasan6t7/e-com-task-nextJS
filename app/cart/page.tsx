"use client";

import React from "react";
import { useCart } from "@/context/cart-context";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Your cart is empty
          </h2>
          <Link href="/products">
            <Button className="bg-[#1163CF] hover:bg-[#0e50b0]">
              Return To Shop
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <span>/</span>
            <span className="">Cart</span>
          </div>
        </div>

        <div className="grid grid-cols-24 gap-4 mb-4 pb-4 border-b">
          <div className="col-span-3">
            <span className="font-medium">Product Details</span>
          </div>
          <div className="col-span-9 text-center">
            <span className="font-medium">Quantity</span>
          </div>
          <div className="col-span-2 text-center">
            <span className="font-medium">Price</span>
          </div>
          <div className="col-span-9 text-center">
            <span className="font-medium">Total</span>
          </div>
        
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-12 gap-4 items-center px-2 py-4 border"
                >
                  <div className="col-span-5 flex items-center gap-3">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={item.mainImage}
                        alt={item.productName}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <span className="text-sm font-medium line-clamp-2">
                      {item.productName}
                    </span>
                  </div>

                  <div className="col-span-2 flex items-center justify-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <input
                      type="text"
                      value={item.quantity.toString().padStart(2, "0")}
                      readOnly
                      className="w-12 h-8 text-center border border-gray-300 rounded"
                    />
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="col-span-2 text-center">
                    <span className="font-medium">
                      ${item.price.toFixed(0)}
                    </span>
                  </div>

                  <div className="col-span-2 text-center">
                    <span className="font-medium">
                      ${(item.price * item.quantity).toFixed(0)}
                    </span>
                  </div>

                  <div className="col-span-1 flex justify-center">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <Link href="/products">
                <Button
                  
                  className="px-8 py-3 border-gray-300 h-auto bg-[#1163CF] hover:bg-[#0e50b0]"
                >
                  Return To Shop
                </Button>
              </Link>
              <Button
               
                className="px-8 py-3 border-gray-300 h-auto bg-[#1163CF] hover:bg-[#0e50b0]"
              >
                Update Cart
              </Button>
            </div>
          </div>

          <div className="lg:w-96">
            <div className="border border-gray-300 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Total</h2>

              <div className="space-y-4">
                <div className="flex justify-between text-sm pb-3 border-b">
                  <span>Subtotal:</span>
                  <span className="font-medium">
                    ${subtotal.toFixed(0)}
                  </span>
                </div>

                <div className="flex justify-between text-sm pb-3 border-b">
                  <span>Shipping:</span>
                  <span className="font-medium">Free</span>
                </div>

                <div className="flex justify-between text-base font-semibold pt-2">
                  <span>Total:</span>
                  <span>${total.toFixed(0)}</span>
                </div>
              </div>

              <Link href="/checkout">
                <Button className="w-full mt-6 bg-[#1163CF] hover:bg-[#0e50b0] h-12 text-base">
                  Proceed to checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}