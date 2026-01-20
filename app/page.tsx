import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Your Name</h1>
        <p className="text-xl text-gray-600 mb-8">Software Engineer & Technical Writer</p>
        <Link 
          href="/blog"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Read My Blog
        </Link>
      </div>
    </div>
  );
}