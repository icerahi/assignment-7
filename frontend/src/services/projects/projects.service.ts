export const allProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/project/all`,
    {}
  );

  return await res.json();
};
