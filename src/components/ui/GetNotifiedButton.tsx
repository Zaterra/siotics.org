import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function GetNotifiedButton({ className = "" }: { className?: string }){
    return(
            <Button
              size="sm"
              className={cn("bg-blue-600 hover:bg-blue-700 text-white group shadow-lg shadow-blue-600/25 ", className)}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Get Notified
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
    )
}