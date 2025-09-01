"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import type { CarouselApi } from "@/components/ui/carousel"

export default function CarouselSpacing() {

    const images = [
    { src: "/images_site/carousel/sophrologie_solo.webp", alt: "Sophrologie en individuel" },
    { src: "/images_site/carousel/sophrologie_groupe.webp", alt: "Sophrologie en groupe" },
    { src: "/images_site/carousel/massage_sonore.webp", alt: "Massage sonore" },
    { src: "/images_site/carousel/relaxation_sonore.webp", alt: "Relaxation sonore" },
    { src: "/images_site/carousel/voyages_sonores.webp", alt: "Voyages sonores" },
  ];
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  
  return (
    <>

        <Carousel setApi={setApi} className="w-full md:max-w-3xl lg:max-w-[1200px]" align="center">
            <CarouselContent className="-ml-1 gap-12">
                {images.map((img, index) => (
                    <CarouselItem key={index} className="pl-1 basis-full md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 px-8 md:px-0">
                            <Card className="p-0 border-0 bg-transparent">
                                <CardContent className="flex aspect-square items-center justify-center p-0 m-0 max-h-[232px] ">
                                    <div className="relative  w-full h-full m-h-[232px]">
                                        <Image 
                                            src={img.src} 
                                            alt={img.alt} 
                                            fill 
                                            className="object-cover rounded-lg" 
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <p className="text-center pt-8 text-plume_clair">{img.alt}</p>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="text-plume hover:text-plume"/>
            <CarouselNext className="text-plume hover:text-plume"/>
        </Carousel>

        <div className="flex justify-center mt-8 mb-8 gap-2">
            {Array.from({ length: count }).map((_, index) => (
                <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-3 w-3 rounded-full transition ${
                    current === index ? "bg-plume_clair opacity-100" : "bg-plume_clair opacity-40"
                }`}
                />
            ))}
        </div>
    </>
  )
}
