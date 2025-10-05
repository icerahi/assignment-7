import BlogDetailsCard from "@/components/blogs/BlogDetails";
import { getBlog } from "@/services/blogs/blogs.service";

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
