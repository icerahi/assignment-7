import ProjectCard from "@/components/projects/ProjectCard";
import { allProjects } from "@/services/projects/projects.service";

export const dynamic = "force-static";

const ProjectsPage = async () => {
  const res = await allProjects();

  const { data, meta } = res;
  return (
    <div className="py-4">
      <div className="grid grid-cols-1 gap-4  mx-auto font-mono text-pretty  w-[60vw]">
        <small className="font-bold">Total: {meta.total} </small>

        {data?.map((item: any) => (
          <ProjectCard project={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default ProjectsPage;
