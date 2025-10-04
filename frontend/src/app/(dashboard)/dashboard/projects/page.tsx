import { allProjects } from "@/services/projects/projects.service";

const ProjectPage = async () => {
  try {
    const res = await allProjects();
    const { data, meta } = res;
    console.log({ data, meta });
  } catch (err) {
    console.log(err);
  }

  return <div>ProjectPage</div>;
};
export default ProjectPage;
