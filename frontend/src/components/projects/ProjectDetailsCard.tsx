/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

export default async function ProjectDetailsCard({
  project,
}: {
  project: any;
}) {
  if (!project) {
    return (
      <div className="py-20 text-center text-gray-500">Project not found.</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 mb-10">
      <h1 className="text-5xl font-bold mb-6">{project?.title}</h1>

      {project.thumbnail && (
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="rounded-lg object-cover shadow-md"
          />
        </div>
      )}

      <article className="prose prose-lg max-w-none my-4">
        <p>{project.description}</p>
      </article>

      <article className="prose prose-lg max-w-none my-4">
        <h2 className="text-lg">Features</h2>
        <p>{project.features}</p>
      </article>
    </div>
  );
}
