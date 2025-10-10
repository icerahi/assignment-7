import { AboutMe } from "@/components/about";
import { aboutMe } from "@/services/user/user.service";

export const dynamic = "force-static";
export const revalidate = false;

const HomePage = async () => {
  const res = await aboutMe();

  const { data } = res;

  return (
    <div className="grid grid-cols-1 mx-auto max-w-3xl">
      <div className="pb-24">
        <AboutMe user={data} />
      </div>
    </div>
  );
};
export default HomePage;
