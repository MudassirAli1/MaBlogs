import React from 'react'
import Link from 'next/link'
import Logo from '/public/assets/logo.png'
import Image from 'next/image'
import { ModeToggle } from './components/themebtn'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  return (
    <div className='sticky  border-b p-4 top-0 backdrop-blur z-20 '> 
      <nav className="">
        <div className="container mx-auto flex justify-between items-center">
          <Link href={"/"}>
            <div className="flex flex-row text-lg font-bold justify-center items-center">
              <Image src={Logo} alt="Logo" height={60} width={60}/>
              MA BLOGS
            </div>
          </Link>
          <div className="hidden md:flex space-x-4 items-center ">
            <Link href="/" className="p-1 hover:text-gray-400">Home</Link>
            <Link href="/Blog" className="p-1 hover:text-gray-400">Blog</Link>
            <Link href="/About" className="p-1 hover:text-gray-400">About</Link>
            <Link href="/Contact" className="p-1 hover:text-gray-400">Contact</Link>
            <span className='mx-2'><ModeToggle /></span>
          </div>

          <div className="lg:hidden md:hidden sm:block flex items-center ">
            <span className='mx-2'><ModeToggle /></span>
            <Sheet>
              <SheetTrigger>
                {/* Add a hamburger icon here for mobile view */}
                <span className="text-3xl ">☰</span>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className='font-bold'>MA BLOGS</SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col gap-3 my-2">
                      <Link href="/" className="p-1 hover:text-gray-400">Home</Link>
                      <Link href="/Blog" className="p-1 hover:text-gray-400">Blog</Link>
                      <Link href="/About" className="p-1 hover:text-gray-400">About</Link>
                      <Link href="/Contact" className="p-1 hover:text-gray-400">Contact</Link>       
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar