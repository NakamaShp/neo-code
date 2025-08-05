"use client";

import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation";
import {
  SignInButton,
  
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Header() {
  const pathname = usePathname();
  const hideAuthButtons =
    pathname.startsWith("/sign-in") ||
    pathname.startsWith("/sign-up") ||
    pathname.startsWith("/dashboard");

  if (hideAuthButtons) return null;

  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
      <SignedOut>
        <SignInButton>
          <Button className="flex flex-wrap items-center gap-2 md:flex-row">
            Dashboard Admin
          </Button>
        </SignInButton>
        
      </SignedOut>
      <UserButton />
    </header>
  );
}
