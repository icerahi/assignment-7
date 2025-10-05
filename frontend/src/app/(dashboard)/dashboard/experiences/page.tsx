import ExperienceCard from "@/components/dashboard/experiences/ExperienceCard";
import { Button } from "@/components/ui/button";
import { allExperiences } from "@/services/experiences/experiences.service";
import Link from "next/link";

const ExperiencesPage = async () => {
  const res = await allExperiences();

  const { data, meta } = res;
  return (
    <div className="py-4">
      <div className="flex flex-col">
        <Button asChild>
          <Link href="/dashboard/projects/create">Create New +</Link>
        </Button>
        <h2 className="text-2xl my-4">All Experiences</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-5">
        {data?.map((item: any) => (
          <ExperienceCard experience={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default ExperiencesPage;
