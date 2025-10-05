/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { DeleteConfirmDialog } from "../DeleteConfirmDialog";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {project.thumbnail ? (
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="h-56 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">
          No Image
        </div>
      )}

      <div className="p-6">
        <Link
          href={`/dashboard/project/${project.id}`}
          className="block group transform hover:-translate-y-1 transition-transform duration-300"
        >
          {" "}
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
        </Link>

        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
          {String(project.description).substring(0, 70)}....{" "}
          <span className="text-blue-600 dark:text-blue-400 cursor-pointer font-semibold text-sm hover:underline">
            See More →
          </span>
        </p>

        <div className="flex items-center   gap-2 mb-4  ">
          <Link
            className="hover:underline text-sm font-semibold text-white bg-blue-500 py-1 px-3 rounded-3xl"
            target="blank"
            href={project.projectLink}
          >
            Project Link
          </Link>

          {project.liveSite && (
            <Link
              className="hover:underline text-sm font-semibold text-white bg-blue-500 py-1 px-3 rounded-3xl"
              target="blank"
              href={project.liveSite}
            >
              Live Link
            </Link>
          )}
        </div>

        <div className="flex justify-between items-center ">
          <div className="flex ml-auto gap-1">
            <Button asChild>
              <Link href={`/dashboard/projects/${project?.id}`}>Edit</Link>
            </Button>
            <DeleteConfirmDialog id={project?.id} scope="project" />
          </div>
        </div>
      </div>
    </div>
  );
}
