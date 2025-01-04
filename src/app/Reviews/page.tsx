"use client"
import React from 'react'
import { Button } from "@/components/ui/button"

const Reviews = () => {
  return (
    <div className="max-w-md my-20 mx-auto mb-10 p-6 shadow-lg border border-gray-300 rounded-3xl shadow-black transform transition-transform duration-300 hover:scale-110 ">

      <h2 className="text-4xl font-bold text-center  mb-6">User Experiences</h2>
      <ul className="space-y-6">
          <li className="bg-gray-200 p-4 rounded-lg shadow-md">
              <p className="font-semibold text-lg text-gray-800">Michael Brown</p>
              <p className="text-gray-700 italic">"This platform has revolutionized my workflow!"</p>
          </li>
          <li className="bg-gray-200 p-4 rounded-lg shadow-md">
              <p className="font-semibold text-lg text-gray-800">Sarah Wilson</p>
              <p className="text-gray-700 italic">"The features are intuitive and easy to use!"</p>
          </li>
          <li className="bg-gray-200 p-4 rounded-lg shadow-md">
              <p className="font-semibold text-lg text-gray-800">David Lee</p>
              <p className="text-gray-700 italic">"A fantastic resource that I recommend to everyone!"</p>
          </li>
      </ul>
      <div className='mt-4 flex justify-center '>
        <Button variant="outline"onClick={() => window.location.href ='/Blog'}>Discover Blogs</Button></div>
      

    </div>
  )
}

export default Reviews