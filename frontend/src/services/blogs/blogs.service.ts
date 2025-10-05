import toast from "react-hot-toast";

function objectToKeyValueString(obj?: Record<string, any>) {
  return (
    obj &&
    Object.entries(obj as Record<string, any>)
      .map(([key, value]) => `${key}=${value}`)
      .join(" ")
  );
}

export const allBlogs = async (filter?: Record<string, any>) => {
  const queryParams = objectToKeyValueString(filter as Record<string, any>);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/all?${queryParams}`,
    {}
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};

export const getBlog = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${id}`,
    {}
  );

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};

export const updateBlog = async (id: string, data: Record<string, any>) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};

export const createBlog = async (data: Record<string, any>) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/create`,
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

export const deleteBlog = async (id: number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) {
    toast.error("failed to fetch data");
  }

  return await res.json();
};
