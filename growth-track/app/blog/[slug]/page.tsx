import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { addInternalLinks } from "@/lib/internalLinker";
import posts from "@/lib/blogData.json";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug.toString() === resolvedParams.slug);

  if (!post) return notFound();

  const linkedContent = addInternalLinks(post.content);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <Image
        src={post.image}
        alt={post.title}
        width={600}
        height={600}
        className="w-full h-80 object-cover"
      />
      <h1 className="text-4xl font-bold mt-6">{post.title}</h1>
      <h2 className="text-xl text-gray-400 mt-2">{post.subtitle}</h2>
      <p
        className="text-gray-300 mt-4 whitespace-pre-line"
        dangerouslySetInnerHTML={{ __html: linkedContent }}
      />
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
