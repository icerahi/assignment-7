import ProjectDetailsCard from "@/components/projects/ProjectDetailsCard";
import { getProject } from "@/services/projects/projects.service";

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await getProject(id);
  return (
    <div className="flex justify-center">
      <ProjectDetailsCard project={res?.data} />
    </div>
  );
};
export default ProjectDetailsPage;
