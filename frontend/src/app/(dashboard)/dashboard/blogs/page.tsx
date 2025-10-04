import { allBlogs } from "@/services/blogs/blogs.service";

const BlogPage = async () => {
  try {
    const res = await allBlogs();
    const { data, meta } = res;
    console.log({ data, meta });
  } catch (err) {
    console.log(err);
  }
  return <div>BlogPage</div>;
};
export default BlogPage;
