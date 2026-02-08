import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="bg-[#f3f7fc] p-3 md:p-10  flex items-center justify-center">
        <div className="w-full bg-[#f3f7fc] max-w-2xl">
 
        <h1 className="text-3xl font-medium text-center mb-8">
          Enter Your Personal Information
        </h1>

        <form  className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Name *"
              className="w-full h-14 px-4 bg-[#d0e3ec] border-0 text-gray-700 placeholder:text-gray-600 rounded-md focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-0"
              required
            />
          </div>

          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your Email *"
              className="w-full h-14 px-4 bg-[#d0e3ec] border-0 text-gray-700 placeholder:text-gray-600 rounded-md focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-0"
              required
            />
          </div>

          <div>
            <Input
              type="tel"
              name="phone"
              placeholder="Your Phone *"
              className="w-full h-14 px-4 bg-[#d0e3ec] border-0 text-gray-700 placeholder:text-gray-600 rounded-md focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-0"
              required
            />
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-4 bg-[#d0e3ec] border-0 text-gray-700 placeholder:text-gray-600 rounded-md focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-0 resize-none"
            />
          </div>
          <div className="flex justify-center pt-2">
            <Button
              type="submit"
              className="px-12 py-3 bg-[#1163CF] hover:bg-[#0e50b0] text-white font-medium rounded-none h-auto"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}