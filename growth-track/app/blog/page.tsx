import Link from "next/link";
import Image from "next/image";
import posts from "@/lib/blogData.json";

export default function Blog() {
  return (
    <div className="flex flex-col gap-4 max-w-7xl mx-auto">
      <h1 className="md:text-6xl sm:text-4xl font-bold text-left text-gray-200">
        Our blog for managing business relationships
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 auto-rows-fr">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={300}
              className="w-full h-80 object-cover"
            />
            <h2 className="text-xl font-bold mt-4">{post.title}</h2>
            <p className="text-gray-400 mt-2">{post.subtitle}</p>
            <div className="flex flex-wrap gap-2 my-3">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={"/tags/" + tag}
                  className="bg-gray-700 px-2 py-1 rounded text-sm hover:bg-lime-600 transition"
                >
                  #{tag}
                </Link>
              ))}
            </div>
            <Link
              href={"/blog/" + post.slug}
              className="w-[115px] text-center mt-auto px-4 py-2 bg-lime-600 text-white rounded-lg hover:bg-lime-700 transition"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
