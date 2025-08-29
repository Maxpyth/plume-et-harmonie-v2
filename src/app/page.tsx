import Image from "next/image";
import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01';
import Header from '../components/header/Header';

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
          <div className="w-full max-w-[1200px]">
            <div className="pt-20 flex items-center justify-center text-plume text-4xl text-center">Améliorer son quotidien et prendre soin de soi</div>
            <div className="flex flex-col items-center md:flex-row md:justify-between w-full">
              <div className="w-full h-100 md:w-1/3 bg-red-200 mb-4 md:mb-0"></div>
              <div className="w-full h-100 md:w-2/3 bg-blue-200"></div>
            </div>
          </div>
        </div>
        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
