import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlNVUEVSIFVTRVIiLCJlbWFpbCI6InN1cGVyQHVzZXIuY29tIiwiaWF0IjoxNzU5NTI2ODc0LCJleHAiOjE3NjAxMzE2NzR9.w0Y1U69gJruWuYcxlJTqUHhiXxVY4XZpFdxL4vIFVsw"; //req.cookies.get("accessToken")?.value;
  if (!token) return NextResponse.redirect(new URL("/login", req.url));

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/validate`,
    {
      headers: {
        cookie: `accessToken=${token}`,
      },
      cache: "no-store",
    }
  );
  console.log(await res.json());
  console.log(await req.url);

  if (res.status !== 200)
    return NextResponse.redirect(new URL("/login", req.url));

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
