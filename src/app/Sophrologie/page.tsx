import Header from '@/components/header/Header';
import Coordonnees from '@/components/coordonnees/coordonnees';
import Footer from '@/components/footer/footer';

export default function Sophrologie() {
  return (
    <div className='font-sans'>
      <Header />    
      <div>Sophrologie</div>
       <Coordonnees variant="clair"/>
       <Footer variant="fonce"/>
    </div>

  );
}