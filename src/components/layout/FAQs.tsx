"use client"
import { FAQsData } from "@/data/content"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQs() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-600/20 text-white overflow-hidden" id="faqs">
      <div className="my-10">
        <h1 className="text-3xl font-bold tracking-tight leading-tight text-center mx-10">Frequently Asked Questions</h1>
      </div>
      <div className="mx-10 sm:mx-64">
        <Accordion type="single" collapsible className="w-full">
          {FAQsData.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={`item-${index}`}>
                <AccordionTrigger className="text-base font-semibold">{item.question}</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 m-1">
                  {item.answer}
                </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
