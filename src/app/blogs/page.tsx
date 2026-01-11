import Link from "next/link";

export const metadata = {
  title: "Blogs | AVV Ayurveda",
};

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

const posts: BlogPost[] = [
  {
    slug: "what-is-ayurveda",
    title: "What is Ayurveda?",
    date: "2025-01-01",
    excerpt:
      "A gentle introduction to Ayurveda's holistic approach and the three doshas.",
  },
];

export default function BlogsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-serif text-4xl text-emerald-900 mb-6">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-black/10 pb-6">
            <h2 className="text-2xl font-serif text-emerald-900">
              <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-sm text-black/70 mt-1">{new Date(post.date).toLocaleDateString()}</p>
            <p className="mt-2">{post.excerpt}</p>
            <Link className="mt-3 inline-block text-emerald-700" href={`/blogs/${post.slug}`}>
              Read more →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


