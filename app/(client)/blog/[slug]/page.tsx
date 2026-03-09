import React from 'react'
import { getPost, getRelatedPosts, POSTS } from '@/constants/blog';
import { notFound } from 'next/navigation';
import { BlogPostHero } from './BlogPostHero';
import { SocialShare } from './SocialShare';
import { ArticleBody } from './ArticleBody';
import { ArticleSidebar } from './ArticleSidebar';
import { NewsletterCTA } from './Newsletter';
import { RelatedPosts } from './RelatedPosts';

interface Params {
    params: Promise<{ slug: string }>;
}

// generate static params 
export const generateStaticParams = () => {
    return POSTS.map((p) => ({ slug: p.slug }));
}

// generate metadata --- what does this code do
export const generateMetadata = async ({ params }: Params) => {
    const { slug } = await params;
    const blog = POSTS.find((p) => p.slug === slug);
    
    if (!blog) return {};

    return {
        title: `${blog.title}`,
        description: blog.excerpt,
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            type: "article",
            publishedTime: blog.publishedAt,
            authors: [blog.author.name],
            tags: blog.tags,
            images: [
                {
                url: `/api/og?title=${encodeURIComponent(blog.title)}`,
                width: 1200,
                height: 630
                }
            ]
        }
    }
}

const SingleBlogPage = async ({ params }: Params) => {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) return notFound();

    const related = getRelatedPosts(post);


  return (
      <>
          <BlogPostHero post={post} />
          <section className="py-16 px-6 md:px-10 border-t border-line">
          <div className="max-w-300 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-14 xl:gap-20">

              {/* Article column */}
              <div className="min-w-0">
                {/* Social share strip — mobile/tablet only, desktop uses fixed rail */}
                <SocialShare post={post} />
                {/* Body blocks */}
                <ArticleBody blocks={post.body} />
              </div>

              {/* Sidebar — TOC + author (desktop only, sticky) */}
              <ArticleSidebar post={post} />
            </div>
          </div>
          </section>
          
          <NewsletterCTA />

          <RelatedPosts posts={related} />
      </>
  )
}

export default SingleBlogPage