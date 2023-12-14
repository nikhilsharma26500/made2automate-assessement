import React from 'react'

const TotalOrders = () => {
  const orders = [{
    name: 'Order 1',
    description: 'This is a description of the order',
    serialNumber: '1234567890'
  }]

  return (
    <>
      <div className='flex flex-col items-center justify-between mx-auto'>
        <div className=" w-full mx-auto flex justify-between">
          <div>
            <h1 className='text-2xl font-bold'>
              Total Leads
            </h1>
            <p>
              a summary of all orders
            </p>
          </div>
          <button className='bg-blue-700 hover:bg-blue-700 active:bg-blue-800 text-white font-bold px-4 rounded-lg'>
            See all orders
          </button>
        </div>
        <div className='flex justify-start  w-[100%]'>
          <ul>
            {orders.map(order => (
              <li className='py-5' key={order.serialNumber}>
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