import { dashboardData } from "@/actions/user.actions";
import { DashboardCard } from "@/components/dashboard/dashboard/DashboardCard";
import toast from "react-hot-toast";

export default async function Dashboard() {
  const res = await dashboardData();
  if (!res.success) {
    toast.error(res.message ?? "Something went wrong to fetch dashboard ");
  }
  const { data } = res;

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-2 py-4 md:gap-6 md:py-6">
          <DashboardCard data={data} />
        </div>
      </div>
    </div>
  );
}
