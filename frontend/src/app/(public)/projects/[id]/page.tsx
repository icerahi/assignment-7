import ProjectDetailsCard from "@/components/projects/ProjectDetailsCard";
import { allProjects, getProject } from "@/services/projects/projects.service";

export const generateStaticParams = async () => {
  const res = await allProjects();
  const { data: projects } = res;

  return projects.map((project: any) => ({ id: String(project.id) }));
};

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await getProject(id);
  return (
    <div className="flex font-mono text-pretty justify-center">
      <ProjectDetailsCard project={res?.data} />
    </div>
  );
};
export default ProjectDetailsPage;
