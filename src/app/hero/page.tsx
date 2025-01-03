"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import Trending from '@/components/ui/trending'
import Reviews from '../Reviews/page'


const Hero = () => {
  return (
    
    <><section><div className="flex flex-col items-center justify-center min-h-screen p-4  ">
      
    <h1 className="text-5xl font-bold text-center mb-4">
     Welcome to MA BLOGS
    </h1>
    <p className="text-lg text-center mb-8">
      Discover a variety of topics and insights. Join me on this journey of exploration and learning!
    </p>

    <div className='flex flex-row gap-3'>
    <Button variant="outline"onClick={() =>window.location.href = '/Blog'}>My Blogs</Button>
    <Button variant="outline"onClick={() => window.location.href = '/About'}>About Us</Button>
    </div>

</div>
  </section>
 
  <Trending/>
  <Reviews/>
  </>

  
  )
}

export default Hero