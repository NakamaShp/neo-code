'use client'

import { usePathname } from 'next/navigation'
import { SignInButton, SignUpButton, SignedOut, UserButton } from '@clerk/nextjs'

export default function Header() {
  const pathname = usePathname()
  const hideAuthButtons = pathname.startsWith('/sign-in') || pathname.startsWith('/sign-up')

  if (hideAuthButtons) return null

  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16">
      <SignedOut>
        <SignInButton />
        <SignUpButton>
          <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      <UserButton />
    </header>
  )
}
