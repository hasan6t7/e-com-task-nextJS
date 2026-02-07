'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0F59B9] text-white">
      <div className="max-w-[1440px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">BuyBee</h2>
            <p className="text-white/90 leading-relaxed ">
              BuyBee is your one-stop destination for all electronics, fashion, and lifestyle products. We connect quality sellers with smart buyers — fast, secure, and reliable shopping.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Check Our App on</h3>
              <div className="flex gap-3">
                <Link 
                  href="#" 
                  className="block hover:opacity-80 transition-opacity"
                >
                  <div className="bg-black rounded-lg px-4 py-2.5 flex items-center gap-2">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] leading-tight">GET IT ON</div>
                      <div className="text-sm font-semibold leading-tight">Google Play</div>
                    </div>
                  </div>
                </Link>
                <Link 
                  href="#" 
                  className="block hover:opacity-80 transition-opacity"
                >
                  <div className="bg-black rounded-lg px-4 py-2.5 flex items-center gap-2">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] leading-tight">Download on the</div>
                      <div className="text-sm font-semibold leading-tight">App Store</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-white/90 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-white rounded-full group-hover:w-2 transition-all"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/shop" 
                  className="text-white/90 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-white rounded-full group-hover:w-2 transition-all"></span>
                  Shop
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-white/90 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-white rounded-full group-hover:w-2 transition-all"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-white/90 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-white rounded-full group-hover:w-2 transition-all"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="text-white/90 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-white rounded-full group-hover:w-2 transition-all"></span>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-semibold mb-6">Customer Support</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/help" 
                  className="text-white/90 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-white rounded-full group-hover:w-2 transition-all"></span>
                  Help Center
                </Link>
              </li>
              <li>
                <Link 
                  href="/shipping" 
                  className="text-white/90 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-white rounded-full group-hover:w-2 transition-all"></span>
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link 
                  href="/returns" 
                  className="text-white/90 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-white rounded-full group-hover:w-2 transition-all"></span>
                  Return & Refund Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="text-white/90 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-white rounded-full group-hover:w-2 transition-all"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-white/90 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-white rounded-full group-hover:w-2 transition-all"></span>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl font-semibold mb-6">Contact & Follow Us</h3>
            <div className="space-y-2 text-sm">
              <p className="text-white/90">
                <span className="font-semibold">Email:</span>{' '}
                <Link 
                  href="mailto:support@buybee.com" 
                  className="hover:text-white transition-colors"
                >
                  support@buybee.com
                </Link>
              </p>
              <p className="text-white/90">
                <span className="font-semibold">Phone:</span>{' '}
                <Link 
                  href="tel:+8801XXXXXXXXX" 
                  className="hover:text-white transition-colors"
                >
                  +8801XXXXXXXXX
                </Link>
              </p>
              <p className="text-white/90">
                <span className="font-semibold">Address:</span> Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="max-w-[1440px] mx-auto px-4 py-4">
          <p className="text-center text-white/80 text-sm">
            © 2025 BuyBee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;