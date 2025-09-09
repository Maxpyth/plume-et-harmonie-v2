import Image from 'next/image';
import { MapPin } from 'lucide-react';

type EventProps = {
  jour: string
  mois: string
  heure: string
  titre: string
  lieu: string
  rue: string
  ville: string
}

export default function Event({ jour, mois, heure, titre, lieu, rue, ville }: EventProps) {
    return(
        <div className='flex flex-row w-full mb-8'>
          <div className='bg-plume rounded-l-xl w-[120px] sm:w-[190px] py-4 px-2'>
            <p className='text-xl text-plume_clair pb-1'>{jour}</p>
            <p className='text-xl text-plume_clair pb-1'>{mois}</p>
            <p className='text-xl text-plume_clair'>{heure}</p>
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
              <p className='text-2xl text-plume'>{titre}</p>
              <p className='text-xl text-plume'>{lieu}</p>
              <div className='flex flex-row items-center color-plume'>
                <div><MapPin className='text-plume h-4 w-4' /></div>
                <div className='pl-4'>
                  <p className='text-sm text-plume'>{rue}</p>
                  <p className='text-sm text-plume'>{ville}</p>
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

    )
};