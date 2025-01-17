import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const NoProducts = () => {
  return (
    <div className='mt-32 text-center text-balance'>
        <h1 className="text-4xl font-semibold mb-2">No Products Yet</h1>
        <p className='mb-4'>Get started with Parity by creating your first product.</p>
        <Button className='' size={'lg'} asChild>
            <Link href='/dashboard/products/new'>Create Product</Link>
        </Button>
    </div>
  )
}

export default NoProducts