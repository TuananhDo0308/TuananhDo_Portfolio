import { getProjectById, getAllProjectIds } from "@/lib/project";
import ProjectDetail from "@/components/projectDetail";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const ids = getAllProjectIds();
  return ids.map((id) => ({
    id: id.toString(),
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const projectId = parseInt(id, 10);
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
