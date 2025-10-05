import BlogCard from "@/components/blogs/BlogCard";
import { allBlogs } from "@/services/blogs/blogs.service";
import { Loader } from "lucide-react";
import { Suspense } from "react";

const BlogsPage = async () => {
  const res = await allBlogs({ published: true });
  const { data, meta } = res;
  return (
    <Suspense fallback={<Loader />}>
      <div className="grid grid-cols-1 mx-auto  w-[50vw]">
        {data.map((blog: any) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </Suspense>
  );
};
export default BlogsPage;
