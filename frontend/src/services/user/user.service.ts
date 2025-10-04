export const aboutMe = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/about-me`,
    {}
  );

  return await res.json();
};
