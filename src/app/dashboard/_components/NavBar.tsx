import BrandLogo from '@/components/ui/BrandLogo'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header className=' flex py-4 shadow bg-background'>
        <nav className='flex items-centergap-10 container'>
            <Link className='mr-auto' href='/dashboard'><BrandLogo /></Link>
            <Link className='mr-auto' href='/dashboard/products'>Products</Link>
            <Link className='mr-auto' href='/dashboard/analytics'>Analytics</Link>
            <Link className='mr-auto' href='/dashboard/subscriptions'>Subscriptions</Link>
            <UserButton />
        </nav>
    </header>
  )
}

export default NavBar