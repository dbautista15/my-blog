import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = params;
  
  let post;
  try {
    post = await getPostBySlug(slug);
  } catch (error) {
    notFound();
  }
  
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <time className="text-gray-600 text-sm">{post.date}</time>
      
      <div 
        className="prose prose-lg mt-8"
        dangerouslySetInnerHTML={{ __html: post.content || '' }}
      />
    </article>
  );
}