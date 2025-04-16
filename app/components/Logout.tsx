"use client";
import { deleteAuthToken } from "@/app/utils/cookie";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Logout() {
  const { replace, refresh } = useRouter();

  const handleLogout = () => {
    toast.loading("Logging out...");
    deleteAuthToken();
    replace("/login");
    refresh();

    setTimeout(() => {
      toast.dismiss();
    }, 1500);
  };

  return (
    <Button
      className="bg-sky-500 hover:bg-sky-600 text-white"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}
