"use client";

import React, { useState } from "react";
import { useCart } from "@/context/cart-context";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function CheckoutPage() {
  const { cart, getCartTotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [couponCode, setCouponCode] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    townCity: "",
    streetAddress: "",
    apartment: "",
    phoneNumber: "",
    emailAddress: "",
    orderSummary: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order placed:", formData);
  };

  const subtotal = getCartTotal();
  const shipping = 0; 
  const total = subtotal;

  return (
    <div className="  py-8">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Returning to customer? </span>
            <Link href="/login" className="text-[#1163CF] hover:underline">
              Click here to login
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl font-semibold mb-8">Shipping info form</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    First Name*
                  </label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="h-12"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Last Name*
                  </label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="h-12"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Town/City*
                </label>
                <Input
                  type="text"
                  name="townCity"
                  value={formData.townCity}
                  onChange={handleChange}
                  className="h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Street Address*
                </label>
                <Input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className="h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Apartment, floor, etc. (optional)
                </label>
                <Input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleChange}
                  className="h-12"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Phone Number*
                  </label>
                  <Input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="h-12"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Email Address*
                  </label>
                  <Input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    className="h-12"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Order Summary (optional)*
                </label>
                <Input
                  type="text"
                  name="orderSummary"
                  value={formData.orderSummary}
                  onChange={handleChange}
                  className="h-12"
                />
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  id="saveInfo"
                  checked={saveInfo}
                  onCheckedChange={(checked) => setSaveInfo(checked as boolean)}
                />
                <label
                  htmlFor="saveInfo"
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>

          <div>
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-16 h-16">
                      <Image
                        src={item.mainImage}
                        alt={item.productName}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <span className="text-sm">{item.productName}</span>
                  </div>
                  <span className="font-medium">${item.price}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm pb-3 border-b">
                <span>Subtotal:</span>
                <span className="font-medium">${subtotal.toFixed(0)}</span>
              </div>
              <div className="flex justify-between text-sm pb-3 border-b">
                <span>Shipping:</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between font-semibold pt-2">
                <span>Total:</span>
                <span>${total.toFixed(0)}</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-4">Choose Payment Method</h3>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between border rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="cursor-pointer font-normal">
                        Pay with Card
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                        alt="Visa"
                        width={40}
                        height={25}
                      />
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                        alt="Mastercard"
                        width={40}
                        height={25}
                      />
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                        alt="PayPal"
                        width={60}
                        height={16}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 border rounded-lg p-4">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="cursor-pointer font-normal">
                      Cash on delivery
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-4">Have Coupon / Voucher?</h3>
              <div className="flex gap-3">
                <Input
                  type="text"
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="h-12"
                />
                <Button
                  type="button"
                  className="bg-[#1163CF] hover:bg-[#0e50b0] h-12 px-8"
                >
                  Apply Coupon
                </Button>
              </div>
            </div>
            <Button
              onClick={handleSubmit}
              className="w-full bg-[#1163CF] hover:bg-[#0e50b0] h-10 text-base font-semibold"
            >
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}