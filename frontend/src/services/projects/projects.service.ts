import toast from "react-hot-toast";

export const allProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/project/all`,
    {}
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};

export const getProject = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/project/${id}`,
    {}
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};

export const updateProject = async (id: string, data: FormData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/project/${id}`,
    {
      method: "PATCH",

      body: data,
      credentials: "include",
    }
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};

export const createProject = async (data: FormData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/project/create`,
    {
      method: "POST",

      body: data,
      credentials: "include",
    }
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};

export const deleteProject = async (id: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/project/${id}`,
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
