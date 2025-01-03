import React from 'react';
import Image from 'next/image';
import Logo from '/public/assets/Logo.png'
import Link from 'next/link';
const About = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow flex items-center justify-center p-6 ">
        <div className="max-w-2xl w-full text-center">
          <section className="mb-10">
            <h2 className="text-5xl mb-4">About Us</h2>
            
            <Image src={Logo} alt='Logo' height={700} width={700} className=''/>
          
            <p className="text-lg font-extrabold">
            Welcome to MA BLOGS your go-to source for simple, clear, and insightful tech content. We break down complex technology into easy-to-understand ideas for everyone!
            </p>
          </section>
          <section className="mb-10">
            <h2 className="text-2xl mb-4">What We Do</h2>
            <p className="text-lg">
            At MA Blogs, we simplify the world of technology by sharing easy-to-follow guides, insightful articles, and the latest tech updates. Our goal is to make tech knowledge accessible and helpful for everyone!
            </p>
          </section>
        
          <section className="mb-10">
            <h2 className="text-2xl mb-4">Get in Touch</h2>
            <p className="text-lg">
              We love hearing from our readers! Reach out to us at
               <Link href="mailto:MABLOGS@gmail.com" className="text-blue-500"> MABLOGS@gmail.com</Link> for any inquiries or feedback.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;