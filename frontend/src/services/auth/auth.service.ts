import toast from "react-hot-toast";

export const login = async (data: Record<string, any>) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  return await res.json();
};

export const logout = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`,
    {
      method: "POST",

      credentials: "include",
    }
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};
