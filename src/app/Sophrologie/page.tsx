import Header from '@/components/header/Header';
import Coordonnees from '@/components/coordonnees/coordonnees';
import Footer from '@/components/footer/footer';
import Image from 'next/image';


export default function Sophrologie() {
  return (
    <div className='font-sans'>
      <Header />
      {/* Image en haut de page */}
      <div className='relative h-64 md:h-80 w-full'>
        <Image 
          src="/images_site/sophrologie.webp" 
          alt="Sophrologie" 
          fill
          className="object-cover object-center md:[object-position:center_20%]"
        />
      </div>
      {/* Titre de la page */}
      {/* paragraphe 1 */}
      
       <Coordonnees variant="clair"/>
       <Footer variant="fonce"/>
    </div>

  );
}