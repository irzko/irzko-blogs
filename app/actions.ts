"use server";
import prisma from "@/lib/prisma";
import { hash } from "bcryptjs";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const signUpAction = async (data: any) => {
  const { name, username, password } = data;

  const exists = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  if (exists) {
    return { message: "Người dùng đã tồn tại" };
  } else {
    await prisma.user.create({
      data: {
        name,
        username,
        password: await hash(password, 10),
      },
    });
  }
  revalidateTag("user");
  redirect("/accounts/login");
};
