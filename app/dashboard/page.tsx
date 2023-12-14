import React from 'react'
import Image from 'next/image'
import TotalOrders from './totalOrders'
import TotalLeads from './totalLeads'
import Figures from './figures'
import Logo from "@/public/logo.png"
import Navbar from './navbar'

const dashboard = () => {
  return (
    <>
      {/* navbar */}
      <Navbar/>
      
      <div className='container mx-auto max-w-screen-xl'>

        {/* dashboard numbers */}
        <Figures />

        {/* total orders */}
        <TotalOrders />

        {/* total leads */}
        <TotalLeads />

      </div>


    </>
  )
}

export default dashboard