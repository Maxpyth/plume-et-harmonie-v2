import Header from '@/components/header/Header';
import Coordonnees from '@/components/coordonnees/coordonnees';
import Footer from '@/components/footer/footer';
import { Separator } from "@/components/ui/separator"


export default function Tarifs() {
  return (
    <div className='font-sans items-center justify-items-center min-h-screen '>
      <div className="relative w-full">
        <Header />
      </div>
      <main className='w-full items-center justify-items-center'>
        {/* Titre de la page */}
        <h1 className="w-full text-center text-5xl  mt-12 pb-12 text-plume max-w-[1200px]">Tarifs</h1>
        <div className='max-w-[1200px] flex flex-col px-8 w-full'>
          <h2 className="text-3xl text-plume bold pb-8"> Sophrologie</h2>
          <div className='flex flex-col md:flex-row gap-4 mb-16'>
            <div className='bg-plume rounded-2xl text-plume_clair text-lg w-full p-8 flex flex-col'>
              <span className='text-2xl pb-4'>Séance individuelle en vue d’un accompagnement</span>
              <span className='text-xl pb-4'>70 €</span>
              <span className='text-xlpb-4'>(1h15 à 1h30 la première séance) en cabinet et en visio</span>
              <span className='text-2xl pb-4'>60 €</span>
              <span className='text-xl pb-4'>(séance de suivi, 1h) en cabinet et en visio</span>
              <span className='text-xlpb-4'>Appel offert de 15 min avant la première séance</span>
            </div>
            <div className='bg-plume rounded-2xl text-plume_clair text-lg w-full p-8 flex flex-col'>
              <span className='text-2xl pb-4'>Séance individuelle Découverte Sophrologie « Reconnexion à Soi »</span>
              <span className='text-xl pb-4'>50 €</span>
              <span className='text-xl'>séance de 50min</span>
              <span className='text-xl pb-4'>en cabinet et en visio</span>
              <span className='text-xl pb-4'>Séance de sophrologie en groupe en entreprise, institut de santé, association, …  </span>
              <span className='text-xl'>Sur devis – Me contacter</span>
            </div>
          </div>
          <p className='text-xl text-plume pb-12'>Certaines mutuelles prennent en charge une partie des séances de sophrologie. Pensez à contacter votre conseiller.</p>
          <div className='flex w-full items-center justify-center'>
            <Separator className='mb-8 max-w-[400px] bg-plume'/>
          </div>
          <div className='flex flex-col md:flex-row gap-4 mb-16'>
            <div className='bg-plume rounded-2xl text-plume_clair text-lg w-full p-8 flex flex-col'>
              <span className='text-2xl pb-4'>Massage sonore en individuel</span>
              <span className='text-xl pb-4'>80 €</span>
              <span className='text-xl pb-4 italic'>(1h15 dont temps d'échange) - En cabinet</span>
              <span className='text-2xl pb-4'>Douceur sonore (relaxation sonore adaptée pour les femmes enceintes et jeunes mamans)</span>
              <span className='text-xl pb-4'>60 €</span>
              <span className='text-xl pb-4'>(1h dont temps d'échange) - <span className='italic'>En cabinet</span></span>
            </div>
            <div className='bg-plume rounded-2xl text-plume_clair text-lg w-full p-8 flex flex-col'>
              <span className='text-2xl pb-4'>Relaxation sonore en individuel</span>
              <span className='text-xl pb-4'>60 €</span>
              <span className='text-xl pb-4'>(1 h dont temps d’échange) – En cabinet</span>
              <span className='text-xl pb-4'>Relaxation sonore en duo</span>
              <span className='text-xl pb-4'>80 € (40€/pers)</span>
              <span className='text-xl'>(1h dont temps d’échange) – En cabinet</span>
            </div>
            <div className='bg-plume rounded-2xl text-plume_clair text-lg w-full p-8 flex flex-col'>
              <span className='text-2xl pb-4'>Voyage sonore ou sophro relaxation sonore en groupe</span>
              <span className='text-xl pb-4'>25 €/pers</span>
              <span className='text-xl'>pour les particuliers – 1h + temps d’échange (à votre domicile – frais de déplacement au delà de 10km de La Haye Foussière)</span>
              <span className='text-xl pb-4'>Minimum 4 personnes – Me contacter pour un devis</span>
              <span className='text-xl'>Séance de groupe en entreprise, institut, association, école, … Sur devis – Me contacter</span>
            </div>
            <div className='bg-plume rounded-2xl text-plume_clair text-lg w-full p-8 flex flex-col'>
              <span className='text-2xl pb-4'>Moi en Harmonie « Cocon Signature »</span>
              <span className='text-xl pb-4'>90 €</span>
              <span className='text-xl pb-4'>créé sur mesure et adapté à vos besoins</span>
              <span className='text-xl pb-4'>(1h + échange téléphonique en amont avec vous, en vue de la création du cocon)</span>
            </div>
          </div>
          <div className='flex w-full items-center justify-center'>
            <Separator className='mb-8 max-w-[400px] bg-plume'/>
          </div>
          
        </div>
        
      </main>
      <Coordonnees variant="clair"/>
      <Footer variant="clair"/>
    </div>

  );
}