import BlogDetailsCard from "@/components/blogs/BlogDetails";
import { allBlogs, getBlog } from "@/services/blogs/blogs.service";

export const generateStaticParams = async () => {
  const res = await allBlogs();
  const { data: blogs } = res;

  return blogs.map((blog: any) => ({ id: String(blog.id) }));
};

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await getBlog(id);
  return (
    <div className="flex justify-center">
      <BlogDetailsCard blog={res?.data} />
    </div>
  );
};
export default BlogDetailsPage;
