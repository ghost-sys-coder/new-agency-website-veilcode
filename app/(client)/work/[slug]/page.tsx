import React from 'react'
import { PROJECTS } from '@/constants/projects'
import { notFound } from 'next/navigation';
import { CaseStudyHero } from './_components/CaseStudyHero';
import { CaseStudyBody } from './_components/CaseStudyBody';
import { ScreenshotGallery } from './_components/ScreenShotGallery';
import { CaseStudyTestimonial } from './_components/CaseStudyTestimonial';
import { CTA } from '@/components/shared/CTA';
import { NextProject } from './_components/NextProject';

interface Params {
  params: Promise<{slug: string}>
}

// get static params
export function generateStaticParams() {
  return PROJECTS.map(project => ({ slug: project.slug }));
}

// generate metadata
export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: `${project.title} - VeilCode Case Study`,
    description: project.summary
  }
}

const page = async ({ params }: Params) => {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return notFound();

  
  return (
    <>
      <CaseStudyHero project={project} />
      <CaseStudyBody project={project} />
      <ScreenshotGallery project={project} />
      <CaseStudyTestimonial project={project} />
      <CTA />
      <NextProject project={project} />
    </>
  )
}

export default page