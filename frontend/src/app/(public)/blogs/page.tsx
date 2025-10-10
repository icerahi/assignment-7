import BlogCard from "@/components/blogs/BlogCard";
import { allBlogs } from "@/services/blogs/blogs.service";
import { Loader } from "lucide-react";
import { Suspense } from "react";

export const revalidate = false;
export const dynamic = "force-static";

const BlogsPage = async () => {
  const res = await allBlogs({ published: true });
  const { data, meta } = res;
  return (
    <Suspense fallback={<Loader />}>
      <div className="grid grid-cols-1 gap-4 mx-auto font-mono text-pretty  w-[60vw]">
        <small className="ml-auto font-bold">Total: {meta.total} </small>
        {data.map((blog: any) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </Suspense>
  );
};
export default BlogsPage;
