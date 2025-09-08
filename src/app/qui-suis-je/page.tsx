import Header from '@/components/header/Header';
import Footer from '@/components/footer/footer';
import Image from 'next/image';

export default function QuiSuisJe() {
  return (
    <>
      <div className='font-sans items-center justify-items-center min-h-screen '>
        <div className="relative w-full">
          <Header />
        </div>
        <main className='w-full items-center justify-items-center'>
          {/* Titre de la page */}
          <h1 className="w-full text-center text-5xl  mt-12 pb-12 text-plume max-w-[1200px]">Qui suis-je ?</h1>
          <div className='flex flex-col md:flex-row w-full items-center px-8 max-w-[1200px] md:max-w-[1500px]'>   
            <div className="flex md:w-1/2 pb-8">
              <div className="relative w-75 h-75 ">
                <Image
                  src="/images_site/avatar_fonce.webp"
                  alt="coordonnées"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className='md:w-1/2'>
              <h2 className='text-2xl text-plume text-center md:text-start pb-8'>Audrey</h2>
              <div className='text-lg text-plume'>
                Il est toujours très difficile de se présenter. Quand commencer? Par où commencer?
                <br /><br />
                Voici donc quelques mots sur le chemin emprunté, il y a quelques années.
                <br /><br />
                En 2016, je suis cadre : management d’équipe, portage de projet, conduite de changement…. je vis des semaines effrenées. J’enchaîne les réunions, je stresse… Et là, pour la première fois depuis 10 ans que je cours dans tous les sens, je ressens le besoin de faire une pause dans ma semaine. Je décide de tester le yoga. J’y ai pris goût. J’ai senti rapidement les effets positifs, qui m’aidaient à lâcher prise et à mieux gérer mon stress. Par la suite, j’ai découvert les vibrations des bols chantants. Révélation : je prenais soin de moi, je me détendais, j’acceptais d’écouter mon corps et je cessais d’être dans le « tout contrôle ».
                <br /><br />
                Curieuse de nature, j’ai voulu comprendre comment ces instruments pouvaient générer autant de ressentis, de perceptions, de détente et de lâcher prise.
                <br /><br />
                J’ai donc suivi ma première formation sur les bols chantants.
                <br /><br />
                J’ai poursuivi mon chemin à la recherche de nouveaux outils. Je me suis orientée vers la sophrologie. La sophrologie étant une méthode notamment inspirée du yoga, c’est donc assez naturellement que j’y ai été sensible.
                <br /><br />
                Au fil des mois, étant plus à l’écoute de moi-même et en harmonie, j’ai décidé de franchir le pas, en empruntant une nouvelle voie, après 17 ans en tant que cadre.
                <br /><br />
                Sophrologue certifiée et sonothérapeute, j’accompagne aujourd’hui les femmes tout au long de leur vie.
                <br /><br />
                J’ai à cœur de les écouter avec bienveillance et douceur pour comprendre au mieux leurs besoins et leur proposer un accompagnement adapté et personnalisé. Chacune est unique. Je propose ainsi un espace d’écoute sécurisant, apaisant et confidentiel.
                <br /><br />
                D’un naturel optimiste, souriante et dynamique, j’ai le souhait que chacune puisse (re)trouver son harmonie intérieure.
                <br /><br />
                Je suis adhérente à la chambre syndicale de sophrologie (www.chambre-syndicale-sophrologie.fr) et je m’engage à respecter le code de déontologie des sophrologues.
                <br /><br />
                Je suis adhérente à l’association Femmes de Bretagne et de Loire-Atlantique, à EndoFrance et à l’association Mama Quilla.
              </div>
            </div>
            <div className="flex py-8 md:hidden">
              <div className="relative w-46 h-46 ">
                <Image
                  src="/images_site/img_qui/chambre_sophro.webp"
                  alt="coordonnées"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          {/* Mon parcours */}
          <div className='bg-plume py-8 w-full'>
          <div className='max-w-[1200px] mx-auto px-8'>
            <h2 className="text-3xl text-plume_clair pb-8">Mon parcours</h2>
            <div className="text-lg text-plume_clair flex flex-col md:flex-row-reverse md:w-full md:justify-between md:items-center">
              <p className='text-lg text-plume_clair md:w-2/3'>2025 : Spécialisation Endométriose pour les sophrologues -Elodie Naudin, sophrologue certifiée (14h)</p>
              <div className="flex w-full items-center justify-center py-8 md:w-fit">
                <div className="relative w-46 h-46 ">
                  <Image
                    src="/images_site/img_qui/image-elodie-naudin.webp"
                    alt="image-elodie-naudin"
                    fill
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="text-lg text-plume_clair flex flex-col md:flex-row-reverse md:w-full md:justify-between md:items-center">
              <p className='text-lg text-plume_clair md:w-2/3'>2025 : Animer des bains sonores pour les femmes enceintes (bain sonore prénatal) – Jessica Da Costa – Ondyssée Maternité (obtention de la certification de réalisation d’une action de formation de 20h)</p>
              <div className="flex w-full items-center justify-center py-8 md:w-fit">
                <div className="relative w-46 h-46 ">
                  <Image
                    src="/images_site/img_qui/odyssee_mat.webp"
                    alt="image-odyssee-maternite"
                    fill
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="text-lg text-plume_clair flex flex-col md:flex-row-reverse md:w-full md:justify-between md:items-center">
              <div className='md:w-2/3 flex flex-col'>
                <p className='text-lg text-plume_clair pb-4'>2023-2024 : Sophrologie – Institut de la Formation à la Sophrologie (IFS Paris X – Catherine Aliotta) – (Obtention de la certification- janvier 2025)</p>
                <p className='text-lg text-plume_clair'>2024 : Spécialisation « sommeil » et spécialisation « périnatalité » (IFS Paris X)</p>
              </div>
              <div className="flex w-full items-center justify-center py-8 md:w-fit">
                <div className="relative w-46 h-46 ">
                  <Image
                    src="/images_site/img_qui/IFS.webp"
                    alt="image-IFS"
                    fill
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="text-lg text-plume_clair flex flex-col md:flex-row-reverse md:w-full md:justify-between md:items-center">
              <div className='md:w-2/3 flex flex-col'>
                <p className='text-lg text-plume_clair pb-4'>2024 : Module 3 – Massage sonore aux bols chantants – Manuel Mahé, sonothérapeute (3 jours) – Obtention du certificat de réussite</p>
                <p className='text-lg text-plume_clair pb-4'>2023 : Musicalité vibratoire et relaxation sonore – Manuel Mahé, sonothérapeute (3 jours)</p>
                <p className='text-lg text-plume_clair pb-4'>2023 : Module 2 – Massage sonore aux bols chantants – Manuel Mahé, sonothérapeute (3 jours)</p>
                <p className='text-lg text-plume_clair pb-4'>2022 : Module 1 – Massage sonore aux bols chantants – Manuel Mahé, sonothérapeute (3 jours)</p>
              </div>
              <div className="flex w-full items-center justify-center py-8 md:w-fit">
                <div className="relative w-46 h-46 ">
                  <Image
                    src="/images_site/img_qui/Manuel_Mahe.webp"
                    alt="image-manuel-mahe"
                    fill
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="text-lg text-plume_clair flex flex-col md:flex-row-reverse md:w-full md:justify-between md:items-center">
              <p className='text-lg text-plume_clair md:w-2/3'>2022 – 2024 : Art du Son – Clélia Félix – Du green et du Love (Attestation de 50h de formation en e-learning)</p>
              <div className="flex w-full items-center justify-center py-8 md:w-fit">
                <div className="relative w-46 h-46 ">
                  <Image
                    src="/images_site/img_qui/Art_du_son.webp"
                    alt="image-art-du-son"
                    fill
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </main>
      </div>
      
      <Footer variant="clair"/>
    </>
    
  );
}