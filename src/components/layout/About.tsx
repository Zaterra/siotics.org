"use client"

import * as React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function About() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  const images = [
    "/images/gallery/image1.webp",
    "/images/gallery/image2.webp",
    "/images/gallery/image3.webp",
  ]

  return (
    <div
      className="relative min-h-screen bg-gradient-to-bl from-gray-600/20 to-black text-white overflow-hidden"
      id="about"
    >
      <div className="mx-10 my-10">
        <h1 className="text-3xl font-bold tracking-tight leading-tight text-center">
          About <br />
          <span className="text-2xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            System Internet of Things <br /> and Robotics
          </span>
        </h1>
      </div>

      {/* Carousel */}
      <div className="m-10">
        <Carousel plugins={[plugin.current]} className="rounded-lg overflow-hidden">
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <Image
                  src={src}
                  width={1920}
                  height={1080}
                  alt={`Image ${index + 1}`}
                  className="rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="m-10">
        <p className="">
          <span className="font-bold">Siotics</span> (System Internet of Things and Robotics) is an extracurricular club and organization at State Vocational 1 Jakarta, founded in 2021. We are dedicated to fostering innovation and collaboration in the fields of IoT systems and robotics.  
        </p>
      </div>
    </div>
  )
}
