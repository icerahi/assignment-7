"use server";

import { cookies } from "next/headers";
import toast from "react-hot-toast";

export const updateProject = async (id: string, data: FormData) => {
  const cookieHeader = (await cookies()).toString();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/project/${id}`,
    {
      headers: {
        cookie: cookieHeader,
      },
      method: "PATCH",
      body: data,
    }
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};

export const createProject = async (data: FormData) => {
  const cookieHeader = (await cookies()).toString();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/project/create`,
    {
      headers: {
        cookie: cookieHeader,
      },
      method: "POST",

      body: data,
    }
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};

export const deleteProject = async (id: number) => {
  const cookieHeader = (await cookies()).toString();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/project/${id}`,
    {
      headers: {
        cookie: cookieHeader,
      },
      method: "DELETE",
    }
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};
