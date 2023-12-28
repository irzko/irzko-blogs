"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";

export default function Page() {
  const session = useSession();
  console.log(session.data?.user);

  if (session.status === "unauthenticated") {
    return <div>Not logged in</div>;
  }

  return (
    <div>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
