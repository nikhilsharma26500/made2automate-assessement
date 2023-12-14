import React from 'react'

const TotalOrders = () => {
  const orders = [{
    name: 'Order 1',
    description: 'This is a description of the order',
    serialNumber: '1234567890'
  },
  {
    name: 'Order 2',
    description: 'This is a description of the order 2',
    serialNumber: '1234567890'
  }
  ]

  return (
    <>
      <div className='flex flex-col items-center justify-between mx-auto mb-10'>
        <div className=" w-full mx-auto flex justify-between">
          <div>
            <h1 className='text-2xl font-bold'>
              Total Orders
            </h1>
            <p>
              a list of all orders
            </p>
          </div>
          <div className='space-x-4'>
            <button className='bg-green-700 h-[100%] hover:shadow-lg active:bg-green-900 text-white font-bold px-4 rounded-lg'>
              Add a new order
            </button>
            <button className='bg-blue-600 h-[100%] hover:shadow-lg active:bg-blue-900 text-white font-bold px-4 rounded-lg'>
              See all orders
            </button>
          </div>
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