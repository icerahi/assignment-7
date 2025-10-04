export const allBlogs = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/all`,
    {}
  );

  return await res.json();
};
