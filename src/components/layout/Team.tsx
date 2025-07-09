"use client"
import { teamData } from "@/data/content"
import { useEffect, useState } from "react";
import Image from "next/image"


export default function Team(){
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
  
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div className="relative max-w-screen flex flex-col bg-gray-600/20 text-white pb-42 overflow-hidden">
            <div className="text-center text-sm my-12 sm:text-lg">
                Brought to you with 🩷 by the{" "}
                <span className="font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                    Siotics
                </span>{" "}
                team
            </div>
            <div className="flex gap-[1rem] md:gap-[2rem] animate-teamScroll w-[200%] hover:pause group">
                {teamData.map((member, index) => (
                    <Image
                        src={`/images/profiles/${member.profilePicturePath}`}
                        alt={member.name}
                        width={isMobile ? 75 : 100}
                        height={isMobile ? 75 : 100}
                        key={index}
                        className="!aspect-square object-cover rounded-lg cursor-pointer hover:border-white hover:border-[2px] hover:!opacity-100 group-hover:opacity-50"
                    />
                ))}
                {teamData.map((member, index) => (
                    <Image
                        src={`/images/profiles/${member.profilePicturePath}`}
                        alt={member.name}
                        width={isMobile ? 75 : 100}
                        height={isMobile ? 75 : 100}
                        key={`duplicate-${index}`}
                        className="!aspect-square object-cover rounded-lg cursor-pointer hover:border-white hover:border-[2px] hover:!opacity-100 group-hover:opacity-50"
                    />
                ))}
            </div>
        </div>
    )
}