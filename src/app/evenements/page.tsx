import Header from '@/components/header/Header';
import Footer from '@/components/footer/footer';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import Event from '@/components/event/event'

export default function Evenements() {
  return (
    <div className='font-sans items-center justify-items-center min-h-screen '>
      <div className="relative w-full">
        <Header />
      </div>
      <main className='w-full max-w-[1200px] items-center justify-items-center p-8'>
          
        {/* Titre de la page */}
        <h1 className="w-full text-center text-5xl  mt-12 pb-12 text-plume max-w-[1200px]">Actus</h1>

        <h2 className="text-2xl text-plume border-b border-plume w-full mb-8">Septembre 2025</h2>
        <div className='flex flex-row w-full mb-8'>
          <div className='bg-plume rounded-l-xl w-[120px] sm:w-[190px] py-4 px-2'>
            <p className='text-xl text-plume_clair pb-1'>Samedi 20</p>
            <p className='text-xl text-plume_clair pb-1'>Septembre</p>
            <p className='text-xl text-plume_clair'>14h30 - 16h</p>
          </div>
          <div className='w-full  bg-plume_event_clair rounded-r-xl flex flex-row items-center'>
            <div className='hidden md:flex'>
              <div className="relative h-28 w-28 ">
                <Image
                  src="/images/logo_plume.webp"
                  alt="plume et harmonie logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className='pl-8'>
              <p className='text-2xl text-plume'>Atelier « Bulle Sonore »</p>
              <p className='text-xl text-plume'>La maison des colibris</p>
              <div className='flex flex-row items-center color-plume'>
                <div><MapPin className='text-plume h-4 w-4' /></div>
                <div className='pl-4'>
                  <p className='text-sm text-plume'>77 ter rue Jean Mermoz</p>
                  <p className='text-sm text-plume'>44340 Bouguenais</p>
                </div>
              </div>
              <p className='text-lg text-plume md:hidden'>Réservation: 06.63.01.92.16</p>
            </div>
            <div className='hidden md:flex md:flex-col ml-auto pr-16'>
              <p className='text-lg text-plume'>Infos et réservations</p>
              <p className='text-lg text-plume'>06.63.01.92.16</p>
            </div>
            
          </div>
        </div>
        <h2 className="text-2xl text-plume border-b border-plume w-full mb-8">Octobre 2025</h2>
        <Event jour="Samedi 18" mois="Octobre" heure="14h30 - 16h" titre="Atelier « Bulle sonore »" lieu ='La maison des colibris' rue='77 ter rue Jean Mermoz' ville='44340 Bouguenais' />
        <h2 className="text-2xl text-plume border-b border-plume w-full mb-8">Novembre 2025</h2>
        <Event jour="Samedi 22" mois="Novembre" heure="9h - 18h" titre="Mademoiselle Violette" lieu ='Week-end bien-être' rue='Nantes' ville='(Bouguenais)' />
        <Event jour="Dimanche 23" mois="Novembre" heure="10h - 18h30" titre="Salon Cybèle – éd. de Noël" lieu ='Château le Saz' rue='213 route du Saz' ville='44230 La Chapelle-sur-Erdre' />
        <Event jour="Samedi 29" mois="Novembre" heure="14h30 - 16h" titre="Atelier « Bulle sonore »" lieu ='La maison des colibris' rue='77 ter rue Jean Mermoz' ville='44340 Bouguenais' />
        <h2 className="text-2xl text-plume border-b border-plume w-full mb-8">Février 2026</h2>
        <Event jour="Dimanche 6" mois="Février" heure="9h30 - 18h" titre="Salon Bien-être" lieu ='Une paire d’ailes' rue='adresse à venir' ville='Vertou' />
        <h2 className="text-2xl text-plume border-b border-plume w-full mb-8">Mai 2026</h2>
        <Event jour="Dimanche 31" mois="Mai" heure="10h - 18h" titre="Festival MamaQuilla" lieu ='Little Atlantique Brewery' rue='23 boulevard de Chantenay' ville='44000 Nantes' />

      </main>
      <Footer variant="clair"/>
    </div>
    
  );
}