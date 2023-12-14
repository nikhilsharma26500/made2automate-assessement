import Link from 'next/link';
import React from 'react'

const TotalOrders = () => {
  const orders = [{
    name: 'Lead 1',
    description: 'This is a description of the Lead 1',
    serialNumber: '1234567890'
  },
  {
    name: 'Lead 2',
    description: 'This is a description of the Lead 2',
    serialNumber: '1234567890'
  },
  {
    name: 'Lead 3',
    description: 'This is a description of the Lead 3',
    serialNumber: '1234567890'
  }]

  return (
    <>
      <div className='flex flex-col items-center justify-between mx-auto'>
        <div className="w-full mx-auto flex justify-between">
          <div>
            <h1 className='text-2xl font-bold'>
              Total Leads
            </h1>
            <p>
              a list of all leads
            </p>
          </div>
          <button className='bg-blue-600 hover:shadow-lg active:bg-blue-900 text-white font-bold px-4 rounded-lg'>
            <Link href="/orders">
              See all orders
            </Link>
          </button>
        </div>
        <div className='flex justify-start w-[100%] my-4'>
          <ul className='w-[100%] space-y-4'>
            {orders.map(order => (
              <li className='py-5 px-4 bg-gray-200 hover:shadow-xl active:shadow-inner rounded-lg ' key={order.serialNumber}>
                <h2>{order.name}</h2>
                <p>{order.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default TotalOrders;