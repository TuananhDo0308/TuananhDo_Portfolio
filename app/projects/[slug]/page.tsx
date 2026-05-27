import { getAllProjectSlugs, getProjectBySlug } from "@/lib/project";
import ProjectDetail from "@/components/projectDetail";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return notFound()
  }

  return <ProjectDetail project={project} />;
}
