"use client"

import Link from 'next/link';
import React from 'react';


const TotalOrders = () => {
  const [showPopup, setShowPopup] = React.useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  const inputValues = ['name', 'description', 'serialNumber', 'quantity']

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
            <button className='bg-green-700 h-[100%] hover:shadow-lg active:bg-green-900 text-white font-bold px-4 rounded-lg' onClick={togglePopup}>
              Add a new order
            </button>
            <button className='bg-blue-600 h-[100%] hover:shadow-lg active:bg-blue-900 text-white font-bold px-4 rounded-lg'>
              <Link href="/orders">

                See all orders
              </Link>
            </button>

            {/* Popup to feed the input values */}
            {showPopup && (
              <div className='fixed top-0 left-0 w-full p-[10vh] h-full flex items-center justify-center bg-black bg-opacity-50'>
                <form className='bg-white p-8 rounded relative'>
                  <button onClick={() => setShowPopup(false)} className='absolute top-0 right-2 m-2 font-bold text-red-500'>close</button>
                  {inputValues.map((field, index) => (
                    <input key={index} type='text' placeholder={field} className='block mb-2' />
                  ))}
                  <input type='file' accept='image/*' className='block mb-2' />
                  <button type='submit' className='mt-4 bg-blue-500 rounded-lg p-2 text-white'>Submit</button>
                </form>
              </div>
            )}
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