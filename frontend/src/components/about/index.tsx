import Link from "next/link";
import ExperienceTimeline from "../experience/ExperienceTimeline";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export async function AboutMe({ user }: { user: any }) {
  console.log(user);
  return (
    <>
      <div className="flex flex-row">
        <Link
          href="https://github.com/icerahi"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full"
        >
          <Avatar className="size-40 shadow border my-2">
            <AvatarImage
              className="object-cover"
              alt={user.name}
              src={user.picture}
            />
            <AvatarFallback className="font-mono font-bold">
              {user.name}
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>

      <div className="flex items-center flex-row gap-4">
        <h1 className="flex dark:text-neutral-100 text-neutral-900 text-4xl font-bold text-balance capitalize">
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

      <div className="flex flex-col font-mono gap-4 dark:text-neutral-200 text-neutral-800 text-pretty my-4">
        <h2>{user.bio}</h2>

        <div>
          <h2 className="text-2xl font-bold"> Skills:</h2>
          <h3>
            {user.skills.map((skill: string) => (
              <span className=""> {skill} </span>
            ))}
          </h3>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Career</h3>

          <div className="py-5">
            <ExperienceTimeline data={user.experiences} />
          </div>
        </div>
      </div>
    </>
  );
}
