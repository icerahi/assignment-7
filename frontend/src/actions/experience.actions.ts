"use server";
import { cookies } from "next/headers";
import toast from "react-hot-toast";

export const updateExperience = async (
  id: string,
  data: Record<string, any>
) => {
  const cookieHeader = (await cookies()).toString();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/experience/update/${id}`,
    {
      method: "PATCH",
      headers: {
        cookie: cookieHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};

export const createExperience = async (data: Record<string, any>) => {
  const cookieHeader = (await cookies()).toString();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/experience/create`,
    {
      method: "POST",
      headers: {
        cookie: cookieHeader,

        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    }
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};

export const deleteExperience = async (id: number) => {
  const cookieHeader = (await cookies()).toString();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/experience/delete/${id}`,
    {
      method: "DELETE",
      headers: {
        cookie: cookieHeader,
      },
      credentials: "include",
    }
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};
