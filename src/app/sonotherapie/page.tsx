import Header from '@/components/header/Header';
import Coordonnees from '@/components/coordonnees/coordonnees';
import Footer from '@/components/footer/footer';
import Image from 'next/image';

export default function Sonotherapie() {
  return (
    <div className='font-sans items-center justify-items-center min-h-screen '>
      <div className="relative w-full">
        <Header />
      </div>
      <main className='w-full items-center justify-items-center'>
        {/* Image en haut de page */}
          <div className='relative h-64 md:h-80 w-full'>
            <Image 
              src="/images_site/bol_head.webp" 
              alt="Sophrologie" 
              fill
              className="object-cover object-center md:[object-position:center_20%]"
            />
          </div>
        {/* Titre de la page */}
        <h1 className="w-full text-center text-5xl  mt-12 pb-12 text-plume max-w-[1200px]">Sonothérapie</h1>
        {/* 1 definition */}
        <div className='px-8 max-w-[1200px] py-8'>
          <h2 className="text-3xl text-plume pb-8">1 – Qu’est-ce que la sonothérapie ?</h2>
          <div className="text-lg text-plume py-8">
            La sonothérapie peut être définie comme l’ensemble des pratiques qui utilisent les sons et les vibrations via des instruments particulièrement riches en harmoniques tels que les bols chantants, les bols de cristal, le tambour, le gong, la voix, … mais également le silence. Ne dit-on pas écouter le silence ?
            <br /><br />
            Elle offre un espace de détente, de relaxation.
            <br /><br />
            Comment fonctionne-t-elle ?
            <br /><br />
            Les ondes sonores, produits par les instruments par exemple, ont la capacité de faire bouger la matière.
            <br /><br />
            Le son fait donc vibrer tous les liquides du corps.
            <br /><br />
            Le corps constitué à environ 65% d’eau absorbe les vibrations émises. Le massage sonore génère par la suite un état de relaxation. Les sons activent certaines zones cérébrales et induisent des états de conscience différents (les états modifiés de conscience).
            <br /><br />
            Par exemple, les ondes alpha (entre 8 à 13 Hz) induisent du calme et de la relaxation. Les ondes thêta (entre 7 à 4 Hz) induisent une relaxation profonde…
            <br /><br />
            Chaque expérience sonore est unique. Elle sera vécue de manière différentes par les différents participants (qui pourront avoir des ressentis semblables, ou bien des ressentis très différents).
            <br /><br />
            La sonothérapie peut permettre entre autres de :
          </div>
          <div className='flex flex-col md:flex-row w-full justify-between pb-8'>
            <ul className='list-inside list-disc'>
              <li className='text-lg text-plume pb-4 '>Réduire le stress, lâcher prise</li>
              <li className='text-lg text-plume pb-4 '>Libérer les tensions, les blocages,</li>
              <li className='text-lg text-plume pb-4 '>Re-dynamiser l’énergie vitale,</li>
              <li className='text-lg text-plume pb-4 '>Libérer les charges émotionnelles,</li>
              <li className='text-lg text-plume pb-4 '>Retrouver le lien avec soi-même…</li>
            </ul>
            <div className='relative w-full max-w-[500px] md:self-end aspect-video'>
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/1j7cdzWWMBk?feature=oembed"
                title="Qu'est-ce que la Sonothérapie ? Le bien-être par les sons"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
          <div className="text-lg text-plume">
            Qu’est-ce que la Sonothérapie ? Le bien-être par les sons (youtube.com)
            <br /><br />
            <em>NB : Pour en savoir plus, vous trouverez sur le web des vidéos le phénomène de cymatique (désigne la technique qui rend les sons visibles).</em>
          </div>
        </div>
        {/* 2 déroulé */}
        <div className='bg-plume py-8 w-full'>
          <div className='max-w-[1200px] mx-auto px-8'>
            <h2 className="text-3xl text-plume_clair pb-8">2 – Comment se déroule un massage sonore ?</h2>
            <div className='relative w-full max-w-[600px] aspect-[16/9] rounded-2xl overflow-hidden mx-auto mb-8'>
              <Image
                src="/images_site/table_sonoth.webp"
                alt="exercice"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="text-lg text-plume_clair">
              Ce massage individuel est réalisé en position allongée, sur une table de massage. La personne reste habillée. Vous êtes recouverte d’une couverture pendant le massage. Il faut juste prévoir une tenue confortable, dans laquelle vous êtes à l’aise, retirer les bijoux (collier, bracelet, ceinture, … ) et porter des chaussettes.
              <br /><br />
              Je débute la séance par un temps d’échange avec vous, afin de comprendre vos attentes, votre état d’esprit, mais également pour savoir si vous avez d’éventuelles douleurs ou gênes corporelles. Ce temps me permet également de vous expliquer les grandes étapes du massage (ouverture du massage, pose de bols chantants sur le corps, temps de silence…clôture du massage).
              <br /><br />
              Puis, les bols chantants sont posés sur différentes parties de votre corps. Je les fais vibrer et chanter. J’utilise d’autres instruments (arbre de pluie, carillons, gong, sansula…) pour les phases de relaxation.
              <br /><br />
              Une fois la séance terminée, je vous laisse revenir doucement à vous et j’accueille avec bienveillance et non jugement vos ressentis que vous souhaitez éventuellement partager.
              <br /><br />
              Par sécurité, je n’effectue pas le massage sonore sur des femmes enceintes ou sur des personnes avec pace maker et portant un appareil stimulateur. En cas de fracture récente ou d’opération, il convient d’éviter de poser des bols sur le corps. Enfin, je proscris les massages sonores sur les personnes présentant des troubles psychiatriques ou étant épileptiques. Contactez-moi, si vous avez des questions ou une situation particulière.
            </div>
          </div>
        </div>
        {/* 3 deroulement */}
        <div className='px-8 bg-plume_clair py-8 max-w-[1200px]'>
          <h2 className="text-3xl text-plume pb-8">3 – Comment se déroule une séance de relaxation sonore (en individuel ou en duo) ?</h2>
          <div className='relative w-full max-w-[600px] aspect-[16/9] rounded-2xl overflow-hidden mx-auto mb-8'>
              <Image
                src="/images_site/sonoth_exo.webp"
                alt="exercice"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="text-lg text-plume">
              La relaxation sonore se réalise en position allongée (ou assise, si cela est plus confortable pour vous) sur un tapis confortable. Comme pour le massage sonore, il est important de bien se couvrir (plaid). Il s’agit d’un temps de relaxation, durant lequel j’utilise différents instruments (bol chantant, gong, carillon, ma voix…) pour vous amener à un moment de détente, de relâchement et de relaxation.
              <br /><br />
              A la différence du massage, aucun instrument n’est posé sur vous.
              <br /><br />
              Comme pour le massage sonore, je débute avec un temps d’échange et je clôture la relaxation par un temps d’écoute de vos ressentis.
            </div>
        </div>
        {/* 4 voyage sonore en groupe */}
        <div className='bg-plume py-8 w-full'>
          <div className='max-w-[1200px] mx-auto px-8'>
            <h2 className="text-3xl text-plume_clair pb-8">4 – Les voyages sonores en groupe</h2>
            <div className="text-lg text-plume_clair">
              J’anime des séances de groupe pour découvrir la relaxation sonore (temps dédié uniquement à un voyage sonore) et la sophro-relaxation sonore (temps incluant des exercices de relaxation dynamique et de relaxation sonore). Je réalise des ateliers « Bulle sonore » à la maison des colibris à Bouguenais. Pensez à regarder la page « Evènements » pour connaître les dates de ces ateliers (ateliers qui combinent des exercices de respiration et un temps de voyage sonore).
              <br /><br />
              Ces séances sont possibles dans les établissements  (EHPAD, ESAT, Foyer, Hôpitaux), dans les entreprises, les établissements scolaires ou chez les particuliers (EVJF, anniversaire…).
              <br /><br />
              Me contacter pour que nous échangions sur votre demande, vos besoins et que je puisse vous transmettre un devis par la suite.
            </div>
          </div>
        </div>
        {/* 5 contre-indications */}
        <div className='px-8 bg-plume_clair py-8 max-w-[1200px]'>
          <h2 className="text-3xl text-plume pb-8">5 – Y-a t’il des contre-indications ?</h2>
          <div className="text-lg text-plume">
            Pour rappel, la sonothérapie ne se substitue pas à une prise en charge médicale.
            <br /><br />
            Pour toute pratique sonore, les contre-indications sont :
          </div>
          <ul className='list-inside list-disc'>
              <li className='text-lg text-plume pb-4 '>l’épilepsie, les troubles psychiques et maladies psychiatriques, les prises de drogues,</li>
              <li className='text-lg text-plume pb-4 '>le port d’un stimulateur cardiaque.</li>
          </ul>
          <div className="text-lg text-plume">
            Il convient d’éviter les voyages sonores « classiques » pour les femmes enceintes pendant le premier trimestre et lors du dernier mois de grossesse, ou en cas de contre-indications médicales. Je pratique des relaxations sonores adaptées pour les femmes enceintes, tout au long de leur grossesse.
            <br /><br />
            Pour toute question ou situation particulière, n’hésitez pas à me contacter par mail.
          </div>
        </div>

      </main>
      <Coordonnees variant="fonce"/>
      <Footer variant="clair"/>
    </div>

  );
}