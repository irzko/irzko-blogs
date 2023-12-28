"use client";
import { Button, Input, Link as NextLink } from "@nextui-org/react";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { SignInOptions, signIn } from "next-auth/react";
// import { signIn } from "@/auth";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const signInOptions: SignInOptions = {
      // redirect: false,
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
      // callbackUrl: pathname === "/accounts/login" ? "/" : pathname,
    };

    setLoading(true);
    signIn("credentials", signInOptions).then((res) => {
      setLoading(false);
      if (res?.error) {
        return;
      }
    });
  };
  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          label="Tên người dùng"
          name="username"
          placeholder="Nhập tên người dùng"
          isRequired
        />
        <Input
          label="Mật khẩu"
          name="password"
          type="password"
          placeholder="Nhập mật khẩu"
          isRequired
        />
        <div className="flex gap-2 justify-end">
          <Button fullWidth color="primary" type="submit" isLoading={loading}>
            Đăng nhập
          </Button>
        </div>
        <NextLink
          color="primary"
          as={Link}
          href="/forgot-password"
          className="flex justify-center"
        >
          Quên mật khẩu?
        </NextLink>
      </form>
    </>
  );
};

export default LoginForm;
