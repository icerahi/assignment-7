import ExperienceCreateForm from "@/components/dashboard/experiences/ExperienceCreateForm";
import { Card, CardTitle } from "@/components/ui/card";

const CreateProject = () => {
  return (
    <div className="flex justify-center">
      <Card className="w-3/4 p-10">
        <CardTitle className="text-center">Add A Job Experience</CardTitle>

        <ExperienceCreateForm />
      </Card>
    </div>
  );
};
export default CreateProject;
