"use client"
import LetterGlitchBox from "@/components/ui/LetterGlitchBox"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { ActivitiesData } from "@/data/content"


export default function Activities() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black to-gray-600/20 text-white overflow-hidden border-white border-0.5" id="activities">
        <div className="my-10">
            <h1 className="text-3xl font-bold tracking-tight leading-tight text-center">What We Do</h1>
            <LetterGlitchBox></LetterGlitchBox>
        </div>
        <div className="mx-10">
            <Accordion type="single" collapsible className="w-full">
                {ActivitiesData.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={`item-${index}`} className="m-4 border-none">
                        <AccordionTrigger className="text-lg  leading-tight tracking-tight border border-gray-600/20 p-3"><item.icon/>{item.title}</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 m-2">
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    </div>
  )
}
