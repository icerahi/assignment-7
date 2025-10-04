import BlogCard from "@/components/dashboard/blogs/BlogCard";
import { allBlogs } from "@/services/blogs/blogs.service";

const BlogPage = async () => {
  const res = await allBlogs();

  const { data: blogs, meta } = res;
  return (
    <div className="py-4">
      <h2 className="text-2xl py-3">All Blogs</h2>

      <div className="grid grid-cols-3 mx-auto gap-5">
        {blogs?.map((blog: any) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};
export default BlogPage;
