"use client";

import { Card, CardBody } from "@nextui-org/card";
import Link from "next/link";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="flex flex-col items-center p-4 justify-center mx-auto md:h-screen lg:py-0">
        <Link
          href="#"
          className="flex items-center my-4 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          irzko
        </Link>
        <div className="flex flex-col w-full md:min-h-[500px]">
          <div className="max-w-md w-full mx-auto">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default Layout;
