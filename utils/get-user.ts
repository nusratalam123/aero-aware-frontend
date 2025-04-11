import { UserType } from "@/types/user";
import { cookies } from "next/headers";

export const getUser = async () => {
  const token = cookies().get("token")?.value;

  if (!token) {
    return null;
  }

  try {
    const response = await fetch(
      "https://aero-air-backend.vercel.app/auth/me",
      {
        headers: { Authorization: `Bearer ${token}` },
        next: {
          revalidate: 120,
          tags: ["PROFILE"],
        },
      },
    );

    const data = await response.json();
    return data.data as UserType;
  } catch (err: any) {
    return null;
  }
};
