import ProjectCard from "@/components/dashboard/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { allProjects } from "@/services/projects/projects.service";
import Link from "next/link";

const ProjectPage = async () => {
  const res = await allProjects();

  const { data, meta } = res;
  return (
    <div className="py-4">
      <div className="flex flex-col">
        <Button asChild>
          <Link href="/dashboard/projects/create">Create New +</Link>
        </Button>
        <h2 className="text-2xl my-4">All Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-5">
        {data?.map((item: any) => (
          <ProjectCard project={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default ProjectPage;
