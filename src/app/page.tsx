import Image from "next/image";
import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01';
import Header from '../components/header/Header';
import {Button} from '@/components/ui/button';
import CarouselSpacing from '@/components/carousel-plume/carousel_plume'

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen">
      <div className="relative w-full">
        <Header />
      </div>
      <main className="w-full">
        <div className="relative w-full h-[690px] md:h-[800px]">
          <Image
            src="/images_site/bol_head.webp"
            alt="Massage sonore"
            fill
            priority           
            className="object-cover object-center md:object-[center_75%]"
          />
          <div className="md:hidden absolute inset-0 left-0 right-0 top-[150px] flex flex-col items-end text-white">
            <p className="text-5xl pb-4">Sophrologie</p>
            <p className="text-5xl">Sonothérapie</p>
          </div>
          <div className="absolute hidden md:grid left-0 right-0 top-[150px] justify-items-center text-white">
            <h1 className="text-7xl pb-20">Plume et Harmonie</h1>
            <p className="text-4xl">Un cocon de douceur pour retrouver son équilibre intérieur</p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-[1200px] pb-12">
            <div className="pt-20 flex items-center justify-center text-plume text-4xl text-center">Améliorer son quotidien et prendre soin de soi</div>
            <div className="flex flex-col md:flex-row md:justify-between md:gap-12 w-full px-8">
              <div className="flex justify-center md:justify-start w-full items-end md:w-1/3 md:min-w-[328px] mb-4 md:mb-0">
                <div className="relative w-[328px] h-[328px] md:h-[360px]">
                  <Image
                    src="/images_site/sophrologie.webp"
                    alt="Sophrologie"
                    fill
                    className="object-cover rounded-t-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h1 className="text-plume text-center pt-16 pb-12">Sophrologie</h1>
                <p className="text-plume text-justify pb-8">Accueillir ses émotions, respirer en conscience, gérer son stress et son anxiété, gérer et soulager au mieux ses douleurs, faire pause, se sentir détendue et sereine, vivre sa grossesse en étant détendue, mieux vivre avec son endométriose… et si vous tentiez la sophrologie pour retrouver votre harmonie intérieure ?</p>
                <Button className="rounded-full bg-plume_btn_clair hover:bg-plume text-plume hover:text-plume_clair shadow-md transition-colors duration-300">Découvrir</Button>
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row md:justify-between md:gap-12 w-full px-8">
              
              <div className="w-full  md:w-2/3">
                <h1 className="text-plume text-center pt-16 pb-12">Sonothérapie</h1>
                <p className="text-plume text-justify pb-8">Accéder à un état de bien-être et de relâchement avec les sons et  les vibrations, se détendre, évacuer les tensions et le stress, se relaxer en se laissant bercer par les sons, voyager avec les sons, se laisser porter et lâcher prise ? Et si vous expérimentiez un massage sonore ou une relaxation sonore pour apaiser votre corps et votre mental ? Une pratique accessible également aux femmes enceintes.</p>
                <Button className="rounded-full bg-plume_btn_clair hover:bg-plume text-plume hover:text-plume_clair shadow-md transition-colors duration-300">Découvrir</Button>
              </div>
              <div className="flex justify-center md:justify-end w-full items-end md:w-1/3 md:min-w-[328px] mb-4 md:mb-0">
                <div className="relative w-[328px] h-[328px] md:h-[360px]">
                  <Image
                    src="/images_site/Sonotherapie.webp"
                    alt="Sonothérapie"
                    fill
                    className="object-cover rounded-t-full"
                  />
                </div>
              </div>
            </div>
          </div>


          <div className="flex flex-col items-center w-full bg-plume">
            <h2 className="mb-12 mt-12 text-plume_clair">Les pratiques proposées</h2>
            <CarouselSpacing/>
          </div>
          



        </div>
        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center h-500">
        
      </footer>
    </div>
  );
}
