import { notFound } from "next/navigation";
import type { NextPage } from "next";

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  content: string;
};

const posts: BlogPost[] = [
  {
    slug: "what-is-ayurveda",
    title: "What is Ayurveda?",
    date: "2025-01-01",
    content: `
Ayurveda is the science of life. It emphasizes balance among body, mind, and spirit using nutrition,
lifestyle, herbs, and therapies like Panchakarma. This post is a placeholder; send me your articles and
I'll migrate them.
    `,
  },
];

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const BlogPostPage: NextPage<BlogPostPageProps> = async ({ params }) => {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 prose">
      <h1 className="font-serif text-4xl text-teal-800 mb-2">{post.title}</h1>
      <p className="text-sm text-black/70 mb-8">{new Date(post.date).toLocaleDateString()}</p>
      <div className="whitespace-pre-wrap leading-7">{post.content}</div>
    </article>
  );
};

export default BlogPostPage;