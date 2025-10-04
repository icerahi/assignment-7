"use client";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const handleLogout = async () => {
    //   const res = await logout(undefined).unwrap();
    //   if (res.success) {
    //     toast.success("Logout successfully");
    //     navigate("/");
    //     dispatch(authApi.util.resetApiState());
    //   }
  };

  return (
    <SidebarProvider className="">
      <AppSidebar className="" />
      <SidebarInset className="">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex justify-between w-full items-center gap-2 px-4">
            <div className="flex items-center">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
            </div>
            <div className="flex items-center gap-4">
              {" "}
              <Button
                onClick={handleLogout}
                className="cursor-pointer font-bold"
                variant="link"
              >
                Imran Hasan (logout)
              </Button>
            </div>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
