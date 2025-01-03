import React from 'react'
import Image from 'next/image'
import Ai from '/public/assets/ai.jpg'
import Neuralink from '/public/assets/neurallink.jpg'
import Starlink from '/public/assets/starlink.jpg'
const Trending = () => {
  return (
    <div>
      <section className="body-font">
        <div className="container px-4 py-10 mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 font-medium title-font text-2xl mb-2 sm:mb-0 underline">
                Trending Now
              </h1>
            </div>
          </div>
          
          <div className="flex flex-wrap -m-4">
            {[
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
             

            ].map((item, index) => (
              <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-9 transition-transform duration-300 hover:scale-95">
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image
                    src={item.src}
                    alt="content"
                    className="object-cover object-center h-full w-full"
                  />
                </div>
                <h2 className="text-xl font-medium title-font mt-5">
                  {item.title}
                </h2>
                <p className="text-base leading-relaxed mt-2 text-gray-400">
                  {item.description}
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Trending