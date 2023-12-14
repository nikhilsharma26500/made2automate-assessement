import React from 'react'
import Navbar from './navbar'
import Image from 'next/image'

const randomNumber = Math.floor(Math.random() * 1000000000);

const products = [
    {
        "productName": "16x16x28 Inductive Sensor Sn: 5mm II Make: DOLPHIN",
        "description": "Inductive Sensor which detects all types of Metallic target. Sensor sensing range varies with Amount of Ferrous Content in Metal. Used for Positioning,aligning & Counting Applications..",
        "imageLink": "https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/1-34.webp?fit=600%2C600&ssl=1",
        "barcode": randomNumber
    },
    {
        "productName": "16x16x28 Inductive Sensor Sn: 5mm II Make: DOLPHIN",
        "description": "Inductive Sensor which detects all types of Metallic target. Sensor sensing range varies with Amount of Ferrous Content in Metal. Used for Positioning,aligning & Counting Applications..",
        "imageLink": "https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/1-34.webp?fit=600%2C600&ssl=1",
        "barcode": randomNumber
    },
    {
        "productName": "16x16x28 Inductive Sensor Sn: 5mm II Make: DOLPHIN",
        "description": "Inductive Sensor which detects all types of Metallic target. Sensor sensing range varies with Amount of Ferrous Content in Metal. Used for Positioning,aligning & Counting Applications..",
        "imageLink": "https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/1-34.webp?fit=600%2C600&ssl=1",
        "barcode": randomNumber
    },
    {
        "productName": "16x16x28 Inductive Sensor Sn: 5mm II Make: DOLPHIN",
        "description": "Inductive Sensor which detects all types of Metallic target. Sensor sensing range varies with Amount of Ferrous Content in Metal. Used for Positioning,aligning & Counting Applications..",
        "imageLink": "https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/1-34.webp?fit=600%2C600&ssl=1",
        "barcode": randomNumber
    },
    {
        "productName": "16x16x28 Inductive Sensor Sn: 5mm II Make: DOLPHIN",
        "description": "Inductive Sensor which detects all types of Metallic target. Sensor sensing range varies with Amount of Ferrous Content in Metal. Used for Positioning,aligning & Counting Applications..",
        "imageLink": "https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/1-34.webp?fit=600%2C600&ssl=1",
        "barcode": randomNumber
    }
];

const orders = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Product List */}
            <div className="container mx-auto max-w-screen-xl scroll-smooth">

                <div className="flex justify-start w-[100%] my-10">
                    <ul className="w-[100%] space-y-8 ">
                        {products.map((product) => (
                            <li
                                className="py-5 px-4 flex space-x-6 bg-gray-200 hover:shadow-xl active:shadow-inner rounded-lg "
                                key={product.barcode}
                            >
                                <div>
                                    <Image src={product.imageLink} height={200} width={200} alt="" className='' />
                                </div>
                                <div className='flex flex-col'>
                                    <h2 className='flex-1 font-bold text-2xl'>{product.productName}</h2>
                                    <p className='flex-1'>{product.description}</p>
                                    <p className='flex-1'>{product.barcode}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default orders