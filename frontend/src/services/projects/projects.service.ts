import toast from "react-hot-toast";

export const allProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/project/all`,
    {}
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};

export const getProject = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/project/${id}`,
    {}
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};
