import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-2xl mb-6">Page Not Found</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-[#1163CF] px-6 py-2 text-white rounded hover:bg-[#0e50b0]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
