import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export async function AboutMe({ user }: { user: any }) {
  return (
    <>
      <div className="flex flex-row">
        <Link
          href="https://github.com/icerahi"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full"
        >
          <Avatar className="size-28 shadow border">
            <AvatarImage alt={user.name} src={user.picture} />
            <AvatarFallback className="font-mono font-bold">
              {user.name}
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>

      <div className="flex items-center flex-row gap-4">
        <h1 className="flex dark:text-neutral-100 text-neutral-900 text-4xl font-bold text-balance">
          {user.name}
        </h1>
        <Button
          variant="default"
          size={null}
          className="font-mono font-bold text-xs px-2 py-1 rounded-full hover:scale-105 transition-all ease-in-out duration-300"
          asChild
        >
          <Link
            href="https://linkedin.com/in/icerahi"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex"
          >
            Available
          </Link>
        </Button>
      </div>

      <div className="flex flex-col font-mono gap-4 dark:text-neutral-200 text-neutral-800 text-pretty">
        <h2>
          {user.bio} Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Nulla quaerat debitis nobis nisi eum corrupti numquam culpa aperiam
          consequuntur iure earum perferendis beatae obcaecati, voluptates,
          facere a dolorum cum voluptatem odit, sint ea ratione reprehenderit
          quos. Aliquid cumque ducimus eaque exercitationem, iusto vitae nemo
          fuga? Earum architecto deserunt assumenda voluptatum molestiae laborum
          praesentium doloremque deleniti amet in excepturi sint corporis porro
          magni, cumque saepe dolorum expedita quas, soluta maxime sequi
          consectetur distinctio? Recusandae facere, esse illo ut doloribus
          nihil. Dolorum officia est maiores, repellendus impedit voluptas odio
          voluptatibus, possimus fugiat, vero in quis eveniet? Corrupti sunt
          laborum voluptates eius quae?{" "}
        </h2>
        <h3>
          {JSON.stringify(user.skills)} ["Javascript",
          "python","express","nodejs"]
        </h3>
      </div>
    </>
  );
}
