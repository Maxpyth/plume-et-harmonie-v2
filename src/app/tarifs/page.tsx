import Header from '@/components/header/Header';
import Coordonnees from '@/components/coordonnees/coordonnees';
import Footer from '@/components/footer/footer';

export default function Tarifs() {
  return (
    <div className='font-sans'>
      <Header />    
      <div>Tarifs</div>
      <Coordonnees variant="clair"/>
      <Footer variant="clair"/>
    </div>

  );
}