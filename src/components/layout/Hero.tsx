"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Bot } from "lucide-react"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    const targetDate = new Date('2025-07-18T07:00:00')

    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        return {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        }
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!timeLeft) {
    return null
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.3}
        duration={2}
        className={cn(
          "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-20%] h-[140%] skew-y-6",
          "stroke-gray-600/40 fill-gray-600/20",
        )}
      />
      <AnimatedGridPattern
        numSquares={20}
        maxOpacity={0.15}
        duration={3.5}
        width={60}
        height={60}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[160%] -skew-y-3",
          "stroke-gray-500/30 fill-gray-500/10",
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 via-transparent to-gray-700/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Badge */}
          <Badge
            variant="outline"
            className="border-blue-800/30 bg-blue-900/20 text-blue-200 hover:bg-blue-800/30 transition-all duration-300 backdrop-blur-sm"
          >
            <Bot className="w-3 h-3 mr-2" />
            SIOTICS Club
          </Badge>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className=" text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Where anyone can{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Build cool stuff
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/75 max-w-2xl mx-auto">
              Be part of State Vocational 1 Jakarta's coolest tech club ⚙️🤖
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="space-y-6">
            <p className="text-gray-400">Registration opens in</p>
            <div className="flex justify-center flex-wrap gap-4">
              {[
                { value: timeLeft.days, label: "DAYS" },
                { value: timeLeft.hours, label: "HRS" },
                { value: timeLeft.minutes, label: "MIN" },
                { value: timeLeft.seconds, label: "SEC" },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-white/10 border-white/30 p-2 w-18 h-18 sm:h-20 sm:w-20 backdrop-blur-md hover:bg-white/15 transition-all"
                >
                  <div className="text-center h-full flex flex-col justify-center">
                    <div className="sm:text-2xl text-xl font-bold text-white">
                      {item.value.toString().padStart(2, "0")}
                    </div>
                    <div className=" text-xs text-gray-400 mt-1">
                      {item.label}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
