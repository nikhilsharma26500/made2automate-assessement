import React from 'react'

const TotalOrders = () => {
  return (
    <>
      <div className='flex flex-wrap items-center justify-between mx-auto'>
        <div className="max-w-screen-xl w-full p-4 mx-auto flex justify-between">
          <div>
            <h1>
              Total Orders
            </h1>
            <p>
              a summary of all orders
            </p>
          </div>
          <button className='bg-blue-700 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded'>
            See all orders
          </button>

        </div>
      </div>
    </>
  )
}

export default TotalOrders