"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  ChevronDown,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { categories } from "@/lib/helper";
import { useCart } from "@/context/cart-context";

const navLinks = [
  { name: "Home", href: "/", color: "#1163CF" },
  { name: "Contact", href: "/contact", color: "#1163CF" },
  { name: "Products", href: "/products", color: "#1163CF" },
  { name: "Hot Offers", href: "/hot-offers", color: "#CF11B6" },
  { name: "Combo", href: "/combo", color: "#CF11B6" },
  { name: "Clearance", href: "/clearance", color: "#CF11B6" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCatOpen, setIsCatOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { getCartCount } = useCart();

  return (
    <header className="w-full relative">
      <div className="bg-[#1163CF] border border-[#82C4FA] text-white py-5">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="text-lg sm:text-sm">
                Email: support@buybee.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Link href="#" className="">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="">
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex items-center justify-between py-4 gap-4">
            <Link
              href="/"
              className="text-2xl font-bold text-[#1163CF] flex-shrink-0"
            >
              BuyBee
            </Link>

            <div className="hidden sm:flex flex-1 max-w-2xl mx-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search items here....."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#F0F8FF] pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1163CF] focus:border-transparent text-sm"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1163CF] transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="/account"
                className="hidden sm:flex items-center gap-0.5 text-gray-700 hover:text-[#1163CF] transition-colors"
              >
                <User className="w-6 h-6" />
                Sign Up/Sign In
              </Link>

              <Link
                href="/wishlist"
                className="hidden sm:block text-gray-700 hover:text-[#1163CF] transition-colors"
              >
                <Heart className="w-6 h-6" />
              </Link>
              <Link
                href="/cart"
                className="relative text-gray-700 hover:text-[#1163CF] transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#1163CF] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    {getCartCount()}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="sm:hidden text-gray-700 hover:text-[#1163CF] transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          <div className="sm:hidden pb-3">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search items here....."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 pr-12 border bg-[#F0F8FF] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1163CF] focus:border-transparent text-sm"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1163CF] transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block bg-white border-b">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex items-center justify-between ">
            <div className="bg-[#1163CF]  text-white px-6 py-3 flex items-center gap-4 hover:bg-[#002d8a] transition-colors font-medium w-60">
              <span>All Categories</span>
              <Menu className="w-5 h-5" />
            </div>

            <nav className="flex items-center font-semibold gap-4 ml-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="px-4 py-3 font-medium transition-colors"
                  style={{ color: link.color }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div></div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg z-50">
          <div className="container mx-auto px-4 py-4">
            <div
              onClick={() => setIsCatOpen(!isCatOpen)}
              className="w-full bg-[#1163CF] text-white px-4 py-3 flex items-center justify-between rounded-md hover:bg-[#002d8a] transition-colors font-medium mb-3"
            >
              <div className="flex items-center gap-2">
                <Menu className="w-5 h-5" />
                <span>All Categories</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex flex-col gap-1 p-1 border shadow">
              {isCatOpen &&
                categories.map((cat, ind) => (
                  <Link
                    key={ind}
                    href={cat.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 font-medium rounded-md transition-colors`}
                  >
                    {cat.name}
                  </Link>
                ))}
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 font-medium rounded-md transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-2 pt-4 mt-4 border-t border-gray-200">
              <Link
                href="/wishlist"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                <Heart className="w-5 h-5" />
                <span>Wishlist</span>
              </Link>

              <Link
                href="/account"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                <User className="w-5 h-5" />
                <span>My Account</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
