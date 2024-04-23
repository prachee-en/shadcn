import { Button } from "@/components/ui/button"
import { CarouselDemo } from "./caroseldemo"
import { NavigationMenuDemo } from "./navdemo"

export default function Home() {
  return (
    <div className="px-20 bg-base-100" >
      <NavigationMenuDemo/>
      <Button>Click me</Button>
      <CarouselDemo/>
    </div>
  )
}
