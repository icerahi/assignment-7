export const allExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/experience/all`,
    {}
  );

  return await res.json();
};
