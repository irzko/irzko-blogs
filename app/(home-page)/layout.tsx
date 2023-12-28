import { auth } from "@/auth";
import { Navbar, NavbarContent, NavbarItem } from "@/components/ui";
import Link from "next/link";
import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <>
      <Navbar>
        <NavbarContent>
          <NavbarItem>
            <Link href="/">Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/posts">Posts</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {children}
    </>
  );
}
