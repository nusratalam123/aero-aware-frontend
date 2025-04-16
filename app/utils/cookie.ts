"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const setAuthToken = async (token: string) => {
  if (!token) {
    throw new Error("token not found");
  }

  cookies().set("token", token);
};

export const deleteAuthToken = async () => {
  cookies().delete("token");
  revalidateTag("PROFILE");
};
