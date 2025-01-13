import BrandLogo from '@/components/ui/BrandLogo'
import { SignedIn, SignedOut, SignIn, SignInButton } from '@clerk/nextjs'
import { Sign } from 'crypto'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header className='flex py-6 fixed top-00 w-full z-10 shadow-sm bg-background/75'>
        <nav className='flex items-center gap-10 container font-semibold'>
            <Link href='/' className='mr-auto'>
            <BrandLogo />
            </Link>
            <Link href='/' className='text-lg'>Features</Link>
            <Link href='/#pricing' className='text-lg'>Pricing</Link>
            <Link href='/' className='text-lg'>About</Link>
            <span className='text-lg'>
                <SignedIn>
                    <Link href='/dashboard'>Dashboard</Link>
                </SignedIn>
                <SignedOut>
                    <SignInButton>Sign in</SignInButton>
                </SignedOut>
            </span>
        </nav>
    </header>
  )
}

export default NavBar