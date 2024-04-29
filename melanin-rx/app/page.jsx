import React from 'react';
import Image from "next/image";
import Link from "next/link";
import './globals.css';
import logo from './img/removebg.png';


export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="flex items-center">
                {/* <Image
                  src="/logo.svg"
                  alt="MelaninRx Logo"
                  width={40}
                  height={40}
                /> */}
                <span className="ml-2 text-lg font-bold">MelaninRx</span>
              </a>
            </div>
            {/* Navbar links */}
            <div className="hidden md:block">
              <div className="flex space-x-4 items-center">
                <a href="/chatbot" className="text-white hover:bg-gray-700 px-3 py-2 mt-3 rounded-md text-sm font-medium">
                  Chatbot
                </a>
                <a href="/about" className="text-white hover:bg-gray-700 px-3 py-2 mt-3 rounded-md text-sm font-medium">
                  About the Issue
                </a>
                <a href="/resources" className="text-white hover:bg-gray-700 px-3 py-2 mt-3 rounded-md text-sm font-medium">
                  Health Analyst
                </a>
                <a href="/sources" className="text-white hover:bg-gray-700 px-3 py-2 mt-3 rounded-md text-sm font-medium">
                  Sources
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          {/* Logo and title */}
          <Image
            src={logo}
            alt="MelaninRx Logo"
            width={350}
            height={350}
            className="mx-auto"
          />
          <h1 className="mt-8 text-4xl font-bold">MelaninRx</h1>
          <p className="mt-4 text-xl">Empowering Black voices for better medical choices.</p>
        </div>
      </main>
    </div>
  );
}
