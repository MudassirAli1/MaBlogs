import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Ai from '/public/assets/ai.jpg'
import Neuralink from '/public/assets/neurallink.jpg'
import Starlink from '/public/assets/starlink.jpg'
import BlockChain from '/public/assets/blockchain.jpg'
import ARVR from '/public/assets/arvr.jpg'
import Robot from '/public/assets/optimus.jpg'
import Autopilot from '/public/assets/Autopilot.jpg'
import Print from '/public/assets/3dprint.jpg'
import Agent from '/public/assets/Agentai.jpg'
import Metaverse from '/public/assets/metaverse.jpg'


const blog = () => {
  const blogsData = [
    {
      id: 1,
      src: Ai,
      title: "Artificial Intelligence",
      description: "AI blog makes learning about Artificial Intelligence easy and fun. We explain how AI works, the latest trends, and how it’s used in everyday life."
    },
    {
      id: 2,
      src: Neuralink,
      title: "Neuralink",
      description: "Neuralink blog explains brain-machine interfaces and how they could help with medical conditions. We explore the future of this exciting technology."
    },
    {
      id: 3,
      src: Starlink,
      title: "Starlink",
      description: "Starlink blog explains satellite internet technology in simple terms. We cover how it works, the latest updates, and its potential to connect the world."
    },
    {
      id: 4,
      src: BlockChain,
      title: "BlockChain Technology",
      description: "Blockchain blog makes complex technology easy to understand. We explore how blockchain works, its current uses, and its potential to transform industries."
    },
    {
      id: 5,
      src: ARVR,
      title: "Ar Vr Technology",
      description: "AR/VR blog simplifies augmented and virtual reality technology. We explore its uses in gaming, education, and beyond, along with its future potential."
    },
    {
      id: 6,
      src: Robot,
      title: "Optimus Robot",
      description: "Optimus Robot blog breaks down the latest advancements in robotics. We discuss how the Optimus robot functions, its features, and its impact on various industries."
    },
    {
      id: 7,
      src: Autopilot,
      title: "Auto Pilot",
      description: "Exploring the technology behind Autopilot systems and how they make vehicles smarter and safer."
    },
    {
      id: 8,
      src:Print,
      title: "3d Printing",
      description: "Discover how 3D printers create objects layer by layer, turning digital designs into real-life models for industries like healthcare, construction, and art."
    },
    {
      id: 9,
      src: Agent,
      title: "Ai Agents",
      description: "Learn how Agent AI works independently to make smart decisions, transforming industries like healthcare, finance, and customer service."
    },
    {
      id: 10,
      src: Metaverse,
      title: "Metaverse",
      description: "Explore the Metaverse, a virtual world where people can interact, work, and play, blending digital and real-life experiences."
    },
     ]

  return (
    <div className='h-auto w-auto'>
     <h1 className='text-4xl text-center my-8 '>Exploring Tomorrow’s Technologies Today</h1>
 

     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
     {blogsData.map((blog , index) => ( 
      <div className='' key={blog.id}>
         <div key={index} className="p-4  sm:mb-0 mb-9 transition-transform duration-300 hover:scale-95">
                        <div className="rounded-lg h-64 overflow-hidden">
                        
                          <Image
                            src={blog.src}
                            alt="content"
                            className="object-cover object-center h-full w-full"
                          />
                        </div>
                        <h2 className="text-xl font-medium title-font mt-5">
                          {blog.title}
                        </h2>
                        <p className="text-base leading-relaxed mt-2 text-gray-400">
                          {blog.description}
                        </p>

                        <div className='flex justify-center items-center'><Link href={`/post/${blog.id}`} >
                          
                          <button className='px-4 py-4 mx-50% bg-gray-200 inline-flex items-center justify-center mt-3 rounded-xl hover:bg-gray-300'>
                             Read More</button>
                        </Link></div>
                        
                      </div>
      </div>
     ))}
     </div>

    </div>
  )
}

export default blog