import Header from '@/components/header/Header';
import Coordonnees from '@/components/coordonnees/coordonnees';
import Footer from '@/components/footer/footer';

export default function Sonotherapie() {
  return (
    <div className='font-sans'>
      <Header />    
      <div>Sonotherapie</div>
      <Coordonnees variant="fonce"/>
      <Footer variant="clair"/>
    </div>

  );
}