import { allExperiences } from "@/services/experiences/experiences.service";

const ExperiencePage = async () => {
  try {
    const res = await allExperiences();
    const { data, meta } = res;
    console.log({ data, meta });
  } catch (err) {
    console.log(err);
  }
  return <div>ExperiencePage</div>;
};
export default ExperiencePage;
