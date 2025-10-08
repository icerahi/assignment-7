"use server";

import { cookies } from "next/headers";

export const dashboardData = async () => {
  const cookieHeader = (await cookies()).toString();
  // const token = cookies().get("accessToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/dashboard`,
    {
      headers: {
        cookie: cookieHeader, // forward cookies to backend
      },
    }
  );

  return await res.json();
};
