import Header from '@/components/header/Header';
import Footer from '@/components/footer/footer';

export default function Evenements() {
  return (
    <div className='font-sans items-center justify-items-center min-h-screen '>
      <div className="relative w-full">
        <Header />
      </div>
      <main className='w-full items-center justify-items-center p-8'>
          
        {/* Titre de la page */}
        <h1 className="w-full text-center text-5xl  mt-12 pb-12 text-plume max-w-[1200px]">Actus</h1>

        <h2 className="text-2xl text-plume border-b border-plume w-full">Septembre 2025</h2>
        <h2 className="text-2xl text-plume border-b border-plume w-full">Octobre 2025</h2>
        <h2 className="text-2xl text-plume border-b border-plume w-full">Novembre 2025</h2>
        <h2 className="text-2xl text-plume border-b border-plume w-full">Février 2026</h2>
        <h2 className="text-2xl text-plume border-b border-plume w-full">Mai 2026</h2>

      </main>
      <Footer variant="clair"/>
    </div>
    
  );
}