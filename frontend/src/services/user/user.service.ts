import { cookies } from "next/headers";
import toast from "react-hot-toast";

export const aboutMe = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/about-me`,
    {}
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};

export const updateProfile = async (picture: File | null, data: any) => {
  const profileInfo = {
    ...data,
    skills:
      data.skills.length !== 0
        ? data.skills
            .toString()
            .split(",")
            .map((skill: string) => skill.trim())
        : undefined,
  };

  const formData = new FormData();
  formData.append("picture", picture as File);
  formData.append("data", JSON.stringify(profileInfo));

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/update`,
    {
      method: "PATCH",

      body: formData,
      credentials: "include",
    }
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};

export const dashboardData = async () => {
  const cookieHeader = cookies().toString();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/dashboard`,
    {
      headers: {
        Cookie: cookieHeader, // forward cookies to backend
      },
    }
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};
