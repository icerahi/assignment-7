"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const login = async (formData: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await res.json();
  if (!data.success) {
    return data;
  }

  if (data?.data?.accessToken) {
    (await cookies()).set("accessToken", data?.data?.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });
  }

  if (data?.data?.refreshToken) {
    (await cookies()).set("refreshToken", data?.data?.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });
  }
  return data;
};

export const authValidate = async () => {
  const cookieHeader = (await cookies()).toString();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/validate`,
    {
      headers: {
        cookie: cookieHeader,
      },
    }
  );
  const data = await res.json();

  if (!data.success) {
    return null;
  }

  return data;
};

export const logout = async () => {
  const cookieHeader = (await cookies()).toString();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`,
    {
      method: "POST",
      headers: {
        cookie: cookieHeader,
      },
    }
  );

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");

  return await res.json();
};
