import React from 'react'
import NavBar from './_components/NavBar'

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='bg-accent/5 min-h-screen'>
        <NavBar />
        <div className='container py-6'>
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout