import Image from "next/image";
import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01';
import Header from '../components/header/Header';

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-2 ">
      <div className="relative w-full">
        <Header />
        <Navbar01 />
      </div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
