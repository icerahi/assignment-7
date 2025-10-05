import ProjectCard from "@/components/projects/ProjectCard";
import { allProjects } from "@/services/projects/projects.service";

const ProjectsPage = async () => {
  const res = await allProjects();

  const { data, meta } = res;
  return (
    <div className="py-4">
      <div className="flex flex-col">
        <h2 className="text-2xl my-4">All Projects</h2>
      </div>

      <div className="grid grid-cols-1 mx-auto  w-[50vw]">
        {data?.map((item: any) => (
          <ProjectCard project={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default ProjectsPage;
