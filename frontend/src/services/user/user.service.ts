export const aboutMe = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/about-me`,
    {}
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};
