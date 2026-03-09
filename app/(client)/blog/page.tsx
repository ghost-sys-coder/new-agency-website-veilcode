import React from 'react'
import { getAllCategories, getAllTags, getFeaturedPost, getRecentPosts } from '@/constants/blog'
import { BlogHero } from './_components/BlogHero';
import { FeaturedPost } from './_components/FeaturedPost';
import { NewsletterCTA } from './[slug]/Newsletter';
import { PostGrid } from './_components/PostGrid';

export const metadata = {
  title: "Blog — VeilCode",
  description: "Engineering deep-dives, design thinking, and practical AI from the VeilCode team."
}

const page = () => {
  const featured = getFeaturedPost();
  const gridPosts = getRecentPosts(featured.slug);
  const categories = getAllCategories();
  const tags = getAllTags();


  return (
    <>
      <BlogHero />
      <FeaturedPost post={featured} />

      <PostGrid
        posts={gridPosts}
        categories={categories}
        tags={tags}
      />
      
      <NewsletterCTA />
    </>
  )
}

export default page