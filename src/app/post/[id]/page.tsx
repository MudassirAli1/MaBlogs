"use client";
import React from "react";
import Image from 'next/image'
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
import CommentSection from "@/app/comment/page";


const blogsData = [
    {
      id: "1",
      img: Ai,
      title: "Artificial Intelligence",
      description: "Artificial Intelligence (AI) is rapidly changing the landscape of technology, offering groundbreaking solutions across various industries. At its core, AI involves creating machines that can perform tasks typically requiring human intelligence, such as learning, problem-solving, and decision-making. From voice assistants like Siri to advanced AI systems in healthcare, AI is enhancing our daily lives by increasing efficiency, accuracy, and convenience. Machine learning, a subset of AI, allows algorithms to improve over time by analyzing data and recognizing patterns. In industries like finance, AI is revolutionizing fraud detection, while in transportation, autonomous vehicles are paving the way for safer and more efficient travel. Despite its potential, AI also raises concerns about ethics, job displacement, and privacy. As AI continues to evolve, it promises to unlock new possibilities in areas like personalized medicine, climate change solutions, and human-machine collaboration. The future of AI holds immense promise, but it will require careful stewardship to ensure it benefits society as a whole."
    },
    {
      id: "2",
      img: Neuralink,
      title: "Neuralink",
      description: "Neuralink, a company founded by Elon Musk, is at the forefront of advancing brain-machine interfaces (BMIs) with the goal of merging human brains with advanced technology. Its ambitious mission is to develop devices that can seamlessly connect the brain to computers, enabling people to control technology directly with their thoughts. The potential applications of Neuralink’s technology are vast, ranging from medical breakthroughs like restoring lost sensory or motor functions to treating neurological conditions such as Parkinson’s disease. Beyond healthcare, Neuralink could revolutionize human capabilities, enhancing cognitive abilities and creating new forms of communication. The technology uses tiny, flexible threads that are implanted into the brain, interfacing with neurons to transmit signals to external devices. Although still in its early stages, Neuralink’s innovations could open the door to mind-controlled devices, offering unprecedented possibilities for human-computer interaction. As the research progresses, Neuralink has the potential to reshape both medicine and human evolution, pushing the boundaries of what we thought was possible. The future holds exciting prospects for those willing to explore the intersection of biology and technology."
    },
    {
      id: "3",
      img: Starlink,
      title: "Starlink",
      description: "Starlink, a groundbreaking initiative by SpaceX, is redefining global internet connectivity. Utilizing a constellation of low-Earth orbit satellites, Starlink delivers high-speed, low-latency internet to even the most remote regions. This innovative technology aims to bridge the digital divide, connecting underserved areas where traditional broadband services are unavailable or unreliable. Starlink’s rapidly expanding network already boasts thousands of satellites, ensuring robust coverage and scalability. With its user-friendly design, including compact satellite dishes and seamless setup, Starlink empowers individuals, businesses, and governments with unprecedented access to information. From enhancing education in rural schools to supporting disaster recovery efforts, the possibilities are endless. As SpaceX continues to innovate, Starlink represents a bold step toward a truly connected world, reshaping the future of communication."
    },
    {
      id: "4",
      img: BlockChain,
      title: "BlockChain Technology",
      description: "Blockchain is transforming the way we handle data, trust, and transactions in the digital age. At its essence, blockchain is a decentralized digital ledger that records information securely and transparently across a network of computers. Unlike traditional systems, it eliminates intermediaries, streamlining processes, reducing costs, and enhancing efficiency. Each block in the chain is immutable, ensuring data integrity and making the system resistant to fraud or tampering. While blockchain is widely known for powering cryptocurrencies like Bitcoin and Ethereum, its applications extend far beyond finance. It enables smart contracts that automate agreements, ensures transparent supply chain management, and enhances data security in healthcare and other industries. Governments and businesses are leveraging blockchain for voting systems, intellectual property rights, and identity verification. Decentralization not only reduces the risk of cyberattacks but also empowers users with greater control over their data. By fostering trust in digital interactions, blockchain is breaking traditional barriers and unlocking new possibilities. As adoption grows, this revolutionary technology is set to drive innovation, reshape industries, and redefine how we connect and transact globally. The potential of blockchain is limitless, marking it as a cornerstone of the digital future."
    },
    {
      id: "5",
      img: ARVR,
      title: "Ar Vr Technology",
      description: "Augmented Reality (AR) and Virtual Reality (VR) are two transformative technologies that are reshaping how we experience the digital world. While VR immerses users in entirely virtual environments, AR enhances the real world by overlaying digital content onto the physical space around us. These technologies have vast applications in entertainment, education, healthcare, and more. In gaming, VR offers fully immersive experiences, while AR has revolutionized industries like retail by allowing customers to virtually try products before purchasing. In healthcare, AR aids in complex surgeries by providing real-time, detailed visualizations, and VR is being used for therapeutic treatments like exposure therapy. Education is also benefiting from these technologies, as AR and VR create interactive learning experiences that were previously unimaginable. As AR and VR continue to evolve, they promise to blur the lines between the digital and physical worlds, offering endless possibilities for innovation and enhancing how we live, work, and play. With further advancements, these technologies will continue to push the boundaries of reality, creating more dynamic and immersive experiences."
    },
    {
      id: "6",
      img: Robot,
      title: "Optimus Robot",
      description: "Optimus, the humanoid robot developed by Tesla, is a groundbreaking step toward advancing robotics and artificial intelligence. Designed to perform a variety of tasks that are typically carried out by humans, Optimus is built to handle everything from simple chores to more complex, labor-intensive work in industrial settings. Powered by Tesla's advanced AI and neural networks, Optimus has the ability to learn and adapt to its environment, making it capable of performing tasks in real-time with remarkable flexibility and efficiency. Unlike traditional robots, Optimus is designed to be cost-effective, with the potential to replace human labor in sectors such as manufacturing, logistics, and customer service. With its humanoid form, it can navigate spaces and interact with objects in a human-like manner, offering a more intuitive interface for those who work alongside it. While still in the development stage, Optimus could significantly impact industries by enhancing productivity and reducing the need for manual labor. As Tesla continues to refine its capabilities, the future of humanoid robots like Optimus holds exciting possibilities for automation, efficiency, and human-robot collaboration."
    },
    {
      id: "7",
      img: Autopilot,
      title: "Auto Pilot",
      description: "Autopilot, a cutting-edge feature developed by Tesla, is revolutionizing the way we think about driving and vehicle automation. Designed to assist drivers with tasks like steering, braking, and accelerating, Autopilot uses a combination of sensors, cameras, and artificial intelligence to navigate the road. While it's not a fully autonomous system yet, it significantly enhances driver safety and convenience by reducing the need for manual input during long drives or in traffic. Tesla's Autopilot system continually learns from real-world data and improves its capabilities over time through software updates, moving closer to full self-driving functionality. The technology can handle highway driving, change lanes, park, and even navigate complex intersections with minimal human intervention. As regulatory approval and further development continue, Autopilot promises to drastically change the future of transportation, improving road safety, reducing traffic congestion, and ultimately paving the way for fully autonomous vehicles. The impact of Autopilot on the automotive industry is profound, setting the stage for the next generation of driving experiences."
    },
    {
      id: "8",
      img:Print,
      title: "3d Printing",
      description: "3D printing is revolutionizing the way we create objects, offering a new era of manufacturing that is fast, cost-effective, and highly customizable. By building objects layer by layer from a digital model, 3D printing allows for the creation of intricate designs that traditional manufacturing methods cannot easily replicate. It has a wide range of applications across industries like healthcare, automotive, aerospace, and fashion. In healthcare, 3D printing is used to create prosthetics, implants, and even custom medical devices tailored to individual patients. In manufacturing, it enables rapid prototyping, allowing companies to test designs quickly and make adjustments before full-scale production. The technology also promotes sustainability, as it minimizes waste by using only the necessary materials. With the continued advancement of 3D printing, it holds the potential to transform everything from home manufacturing to space exploration, unlocking new possibilities for innovation, creativity, and problem-solving. As it becomes more accessible, 3D printing is set to reshape how we think about production and design in the future."
    },
    {
      id: "9",
      img: Agent,
      title: "Ai Agents",
      description: "AI agents are intelligent systems designed to perform tasks autonomously, making decisions and taking actions based on data and predefined goals. These agents leverage artificial intelligence, machine learning, and deep learning algorithms to simulate human-like behavior, solve problems, and interact with their environment. From virtual assistants like Siri and Alexa to autonomous vehicles and customer service bots, AI agents are revolutionizing industries by automating processes, enhancing efficiency, and providing personalized experiences. In business, they can analyze data to predict trends, optimize operations, and assist in decision-making. AI agents are also transforming healthcare by aiding in diagnostics, recommending treatments, and even monitoring patients remotely. As technology advances, AI agents are becoming more sophisticated, capable of handling complex tasks that require critical thinking and problem-solving. Their potential extends beyond simple tasks, promising to drive innovation in various sectors, including finance, education, and entertainment. As these agents continue to evolve, they hold the power to significantly improve productivity, streamline operations, and redefine the role of humans in the workplace."
    },
    {
      id: "10",
      img: Metaverse,
      title: "Metaverse",
      description: "The Metaverse is an immersive, interconnected virtual world where users can interact with each other and digital environments in real-time. Powered by technologies like virtual reality (VR), augmented reality (AR), and blockchain, the Metaverse offers limitless possibilities for socializing, gaming, shopping, education, and business. In this digital universe, users can create avatars, attend virtual events, explore expansive digital landscapes, and even own virtual property. The Metaverse is transforming how we interact with the internet by blending physical and virtual spaces, allowing for more immersive and dynamic experiences. It promises to redefine the concept of work and leisure, offering new opportunities for remote collaboration, entertainment, and commerce. Major companies, from tech giants to startups, are already investing heavily in the Metaverse, seeing it as the next frontier of digital innovation. As it continues to evolve, the Metaverse could change how we communicate, work, and live, creating a new virtual economy and changing the fabric of social interaction. While still in its early stages, the Metaverse is shaping the future of digital life, with a vast potential to reshape various industries."
    },
     ]
export default function post ({params}:{params:{id:string}}){
   const {id} = params;
   const post = blogsData.find((b) => b.id === id);

   if (!post){
    return (       
             <h1 className="text-center font-bold text-7xl my-40">Page Does Not Exist</h1>
             )
    }

    const renderParah = (description :string) => {
      return description.split("/n").map((parah , index)=>(
        <p key={index} className="mt-4 text-justify">
          {parah.trim()}
        </p>
      ));
    };
    return (
      <div className="mx-auto my-10 px-5 max-w-3xl bg-white shadow-lg shadow-black rounded-lg overflow-hidden">
  {post.img && (
    <Image 
      src={post.img}
      alt={post.title}
      className="w-full h-auto object-cover"
    />
  )}
  <h1 className="font-bold text-4xl text-center text-gray-800 mt-4">{post.title}</h1>
  
  <div className="mt-6 text-gray-700">
    {renderParah(post.description)}
  </div>


  <CommentSection/>
</div>
    )
}