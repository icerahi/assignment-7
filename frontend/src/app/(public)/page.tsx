import { AboutMe } from "@/components/about";

const HomePage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/about-me`
  );

  const { data } = await res.json();

  return (
    <div className="grid grid-cols-1 mx-auto  max-w-3xl">
      <div className="pb-24">
        <AboutMe user={data} />
      </div>
    </div>
  );
};
export default HomePage;
