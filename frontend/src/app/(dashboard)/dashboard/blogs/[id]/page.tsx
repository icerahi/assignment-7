import BlogEditForm from "@/components/dashboard/blogs/BlogEditForm";
import { Card, CardTitle } from "@/components/ui/card";
import { getBlog } from "@/services/blogs/blogs.service";

const BlogEditPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await getBlog(id);
  return (
    <div className="flex justify-center">
      <Card className="w-3/4 p-10">
        <CardTitle className="text-center">Update Blog</CardTitle>

        <BlogEditForm blog={res?.data} />
      </Card>
    </div>
  );
};
export default BlogEditPage;
