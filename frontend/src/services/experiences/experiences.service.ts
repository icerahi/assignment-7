import toast from "react-hot-toast";

export const allExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/experience/all`,
    {}
  );

  if (!res.ok) {
    console.log(res);
    toast.error("failed to fetch data");
  }

  return await res.json();
};

export const getExperience = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/experience/${id}`,
    {}
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};

export const updateExperience = async (
  id: string,
  data: Record<string, any>
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/experience/update/${id}`,
    {
      method: "PATCH",
      headers: {
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

export const createExperience = async (data: Record<string, any>) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/experience/create`,
    {
      method: "POST",
      headers: {
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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/experience/delete/${id}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};
