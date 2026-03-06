"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from "next/image"
import floatingStar from "../../../..public/assets/landingPage/floatingStar.svg"
import floatingCercleGreen from "../../../../public/assets/landingPage/floatingCercleGreen.svg"
import floatingBook from "../../../../public/assets/landingPage/floatingBook.svg"
import floatingReactLogo from "../../../../public/assets/landingPage/floatingReactLogo.svg"
import floatingHaflCercle from "../../../../public/assets/landingPage/floatingHaflCercle.svg"
import floatingGlobe from "../../../../public/assets/landingPage/floatingGlobe.svg"
import LeftHero from './ui/LeftLandingPage'
import { videos } from '../../../../data/hero/videos'


const FloatingShape = ({ children, className, left, top, animationDuration = 8 }: any) => {
  return (
    <div
      className={`absolute opacity-1 ${className}`}
      style={{
        left: `${left}%`,  // Accept specific left position
        top: `${top}%`,    // Accept specific top position
        transform: `translate(-50%, -50%)`,
        animation: `float ${animationDuration}s infinite ease-in-out`
      }}
    >
      {children}
    </div>
  )
}


// Video component with autoplay
const VideoTile = ({ videoUrl }: { videoUrl: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error)
      })
    }
  }, [])

  return (
    <div className="relative aspect-video rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        autoPlay
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  )
}

export default function Hero() { 
  

  return (
    <div className=" bg-white overflow-hidden" id='home'>
      {/* Keep your existing floating shapes and styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { 
            transform: translate(-50%, -50%) translateY(0px) rotate(0deg);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          25% { 
            transform: translate(-50%, -50%) translateY(-15px) rotate(5deg);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          75% { 
            transform: translate(-50%, -50%) translateY(15px) rotate(-5deg);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
        }
      `}</style>

      {/* Floating background elements */}
      <div className="absolute inset-0 z-0">
        <FloatingShape className="text-orange-200" left={10} top={20} animationDuration={6}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
            <circle cx="20" cy="20" r="20" />
          </svg>
        </FloatingShape>

        <FloatingShape className="text-orange-200" left={45} top={25} animationDuration={6}>
            <Image src={floatingReactLogo} alt="floating react logo" width={40} height={40}></Image>
        </FloatingShape>

        <FloatingShape className="text-orange-200" left={80} top={20} animationDuration={7}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 0 L40 30 L0 30 Z" />
          </svg>
        </FloatingShape>

        <FloatingShape className="text-orange-200" left={25} top={70} animationDuration={8}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
            <rect width="40" height="40" />
          </svg>
        </FloatingShape>

        <FloatingShape className="text-blue-300" left={30} top={50} animationDuration={9}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </FloatingShape>
      </div>




      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-14 pt-4 md:pt-8 pb-2 flex flex-col md:flex-row items-center relative z-10">

{/* Left content - Div 1 */}
<div className="md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
  <LeftHero />
</div>

{/* Right content - Div 2 */}
<div className="md:w-1/2 order-1 md:order-2 relative">
  {/* Video grid with blur effect */}
  <div className="grid grid-cols-4 gap-2 opacity-70 blur-[1px] transition-all duration-300 hover:blur-0 hover:opacity-80">
    {videos.map((video, index) => (
      <VideoTile key={index} videoUrl={video} />
    ))}
  </div>

  {/* Instructor image overlay */}
  <div className="absolute inset-0 flex items-center justify-center z-20">
    <div className="relative w-2/3 transform transition-all duration-300 hover:scale-105">
      <Image
        src="/assets/landingPage/vimalsir.png"
        alt="Featured instructor"
        width={400}
        height={500}
        className="rounded-lg drop-shadow-2xl"
        priority
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    </div>
  </div>
</div>
</main>

    </div>
  )
}