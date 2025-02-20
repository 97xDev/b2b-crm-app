import { notFound } from "next/navigation";
import Link from "next/link";

import posts from "@/lib/blogData.json";

interface BlogPostProps {
  params: { slug: string };
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = posts.find((p) => p.id.toString() === params.slug);

  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-4xl font-bold mt-6">{post.title}</h1>
      <h2 className="text-xl text-gray-400 mt-2">{post.subtitle}</h2>
      <p className="text-gray-300 mt-4 whitespace-pre-line">{post.content}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {post.tags &&
          post.tags.map((tag: string) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="bg-gray-700 px-2 py-1 rounded text-sm hover:bg-lime-600 transition"
            >
              #{tag}
            </Link>
          ))}
      </div>
    </div>
  );
}
