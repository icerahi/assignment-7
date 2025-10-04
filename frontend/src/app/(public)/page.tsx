import { AboutMe } from "@/components/about";

const HomePage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/about-me`
  );

  const { data } = await res.json();

  return (
    <div className="flex flex-col flex-1">
      <div className="pb-24">
        <AboutMe user={data} />
      </div>
    </div>
  );
};
export default HomePage;
