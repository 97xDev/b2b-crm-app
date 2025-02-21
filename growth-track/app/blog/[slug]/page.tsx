import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

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
      <h1 className="text-4xl font-bold mt-6">{post.title}</h1>
      <h2 className="text-xl text-gray-400 mt-2">{post.subtitle}</h2>
      <div className="prose prose-invert max-w-none mt-4">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-4xl font-bold mt-6" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2
                className="text-3xl font-semibold mt-6 text-gray-300"
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className="text-2xl font-semibold mt-4 text-gray-400"
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p className="text-gray-300 mt-2 leading-relaxed" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul
                className="list-disc list-inside mt-2 space-y-1 text-gray-300"
                {...props}
              />
            ),
            li: ({ node, ...props }) => (
              <li className="ml-4 text-gray-300" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a className="text-lime-400 hover:underline" {...props} />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote
                className="border-l-4 border-gray-500 pl-4 italic text-gray-400"
                {...props}
              />
            ),
          }}
        >
          {linkedContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}
