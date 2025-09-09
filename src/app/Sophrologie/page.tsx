import Header from '@/components/header/Header';
import Coordonnees from '@/components/coordonnees/coordonnees';
import Footer from '@/components/footer/footer';
import Image from 'next/image';


export default function Sophrologie() {
  return (
    <div className='font-sans  min-h-screen flex flex-col'>
      <div className="relative w-full">
        <Header />
      </div>
      <main className='w-full  flex-1'>
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
          <h1 className="w-full text-center text-5xl  mt-12 pb-12 text-plume max-w-[1200px]">Sophrologie</h1>
          {/* 1 definition */}
          <div className='px-8 max-w-[1200px] w-full mx-auto'>
            <h2 className="text-3xl text-plume pb-8">1 – Qu’est-ce que la sophrologie ?</h2>
            <p className='text-lg text-plume pb-4'>La sophrologie est une méthode psychocorporelle, conçue en 1960 par un neuropsychiatre, Alfonso Caycedo. Il s’est inspiré d’un ensemble de concepts thérapeutiques déjà connus du corps médical (hypnose, Méthode Coué, training autogène, relaxation progressive de Jacobson..) et de concepts orientaux (yoga, bouddhisme..) pour créer une nouvelle méthode.</p>
            <p className='text-lg text-plume pb-4'>La sophrologie permet de développer sa conscience, pour retrouver un état de bien-être au quotidien et de développer son potentiel.</p>
            <p className='text-lg text-plume pb-4'>C’est une méthode verbale et non tactile, qui utilise la détente et l’écoute des ressentis (émotionnels, mentaux, physiques) pour faire émerger les capacités et les ressources propres à chacun.</p>
            <p className='text-lg text-plume pb-4'>Elle permet d’aller à la découverte de soi et de ses capacités, d’en prendre conscience pour pouvoir les mobiliser au quotidien</p>
            <p className='text-lg text-plume pb-4 italic'>Focus sur la sophrologie et l’endométriose :</p>
            <p className='text-lg text-plume pb-4'>La sophrologie va permettre de soulager les symptômes des douleurs, d’apaiser les douleurs. Suivant les besoins exprimés, il pourra être travaillé sur la gestion des émotions, la libération des émotions enfouies, la fatigue chronique ou encore sur l’acceptation de la maladie.</p>
            <p className='text-lg text-plume pb-4'>Chaque endométriose est différente et vécue différemment. L’objectif est de pouvoir prendre en compte vos besoins et d’adapter au mieux les séances.</p>
            <p className='text-lg text-plume pb-4'>Suivant votre parcours et votre situation propre, peut-être sera-t-il question de votre accompagnement de parcours PMA…</p>
            <p className='text-lg text-plume pb-4'>Le suivi vient en complément de votre suivi médical et ne se substitue aucunement à la prise en charge validée par vos soignants.</p>
            <p className='text-lg text-plume pb-4 italic'>Focus sur la sophrologie et la périnatalité :</p>
            <p className='text-lg text-plume pb-4'>La sophrologie périnatale s’adresse aux femmes en désir de grossesse, aux femmes enceintes et aux jeunes mamans. Cette méthode douce va être adaptée (adaptation des postures, mouvements, position) tout au long de la grossesse et après, en fonction de chacune.</p>
            <p className='text-lg text-plume pb-4'>La sophrologie périnatale permet de préparer et d’accompagner les femmes à mieux vivre ce moment de leur vie (du désir d’enfant jusqu’à l’accouchement). Le postpartum est une période également très sensible (babyblues, parfois dépression…). Les femmes ont été accompagnées durant la grossesse, elles ont été au centre de l’attention et des attentions. Après la naissance du bébé, elle peuvent avoir la sensation de passer au second plan, alors même que leurs émotions, leurs besoins (de soutien, d’écoute…) sont aussi importants que durant la grossesse.</p>
            <p className='text-lg text-plume pb-4'>La sophrologie périnatale vient en complément du suivi médical proposé par les professionnels de santé (médecin généraliste, gynécologue, sage-femme). Elle ne se substitue pas à cet accompagnement. Elle offre des outils supplémentaires.</p>
            <p className='text-lg text-plume pb-4'>Quelques bienfaits de la sophrologie périnatale pendant la grossesse :</p>
            <ul className='list-inside list-disc'>
              <li className='text-lg text-plume pb-4 '>Réduction du stress et de l’anxiété : la sophrologie aide à calmer les pensées, les peurs et à réduire les tensions.</li>
            </ul>
            <ul className='list-inside list-disc'>
              <li className='text-lg text-plume pb-4 '>Amélioration du sommeil : les exercices de relaxation favorisent un repos plus réparateur.</li>
            </ul>
            <p className='text-lg text-plume pb-4'>Quelques bienfaits durant le post-partum</p>
            <ul className='list-inside list-disc'>
              <li className='text-lg text-plume pb-4 '>Soutien face au babyblues : la sophrologie aide à mieux gérer les émotions et les variations hormonales et aussi à retrouver une vitalité.</li>
            </ul>

          </div>
          {/* 2 moyens */}
          <div className='bg-plume py-8 w-full items-center justify-center flex flex-col'>
            <div className='max-w-[1200px] px-8'>
              <h2 className="text-3xl text-plume_clair pb-8">2 – Quels sont les moyens utilisés en sophrologie ?</h2>
              <p className='text-lg text-plume_clair'>En tant que sophrologue certifiée, je vais recourir à trois moyens pour amener la détente et favoriser l’émergence des ressentis :</p>
              <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 w-full gap-1 md:gap-4">
                <div className="col-start-1 flex items-center justify-center">
                  <div className="relative w-24 h-24 pt-4">
                    <Image
                      src="/images_site/svg/picto_wind.svg"
                      alt="wind"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="col-start-1 row-start-2 md:row-start-1 md:col-start-2 flex items-center justify-center">
                  <div className="relative w-24 h-24 pt-4">
                    <Image
                      src="/images_site/svg/picto_relax.svg"
                      alt="relax"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="col-start-1 row-start-3 md:row-start-1 md:col-start-3 flex items-center justify-center">
                  <div className="relative w-24 h-24 pt-4">
                    <Image
                      src="/images_site/svg/picto_brain.svg"
                      alt="brain"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="col-start-2 md:col-start-1 md:row-start-2 text-plume_clair">la respiration contrôlée. Il s’agit d’une respiration consciente et volontaire.</p>
                </div>
                <div className="flex items-center">
                  <p className="col-start-2 row-start-2 text-plume_clair">la détente musculaire. Elle est engendrée par des contractions et des relâchements volontaires des chaînes musculaires.</p>
                </div>
                <div className="flex items-center">
                  <p className="col-start-2 md:col-start-3 row-start-3 md:row-start-2 text-plume_clair">la suggestion mentale ou visualisation positive. Il s’agit de permettre la visualisation positive d’images, de souvenirs ou de situations futures.</p>
                </div>
              </div>
            </div>
          </div>
          {/* 3 deroulement */}
          <div className='px-8 bg-plume_clair py-8 max-w-[1200px] w-full mx-auto'>
            <h2 className="text-3xl text-plume pb-8">3 – Comment se déroule une séance de sophrologie ?</h2>
            <div className='text-lg text-plume pb-4'>
                  Lors de la première séance de sophrologie, vous évoquez l’objet de votre visite et vous parlez de votre demande (ex : Je voudrais être moins stressée).
                  <br />
                  <br />
                  Je vais alors vous poser différentes questions (ce temps est appelé anamnèse). Puis, je vais vous demander de formuler un objectif d’accompagnement, qui va être adapté à votre situation et à vos besoins.
                  <br />
                  <br />
                  Un objectif d’accompagnement peut être ainsi :
                  <br />
                  <br />
                  <em className='text-center block'>« Je veux me sentir sereine au quotidien. »</em>
                  <em className='text-center block'>« Je souhaite gérer efficacement les douleurs de la maladie (endométriose, fibromyalgie…) au quotidien. »</em>
                  <em className='text-center block'>« Je souhaite vivre sereinement mon accouchement. »</em>
                  <em className='text-center block'>« Je souhaite vivre sereinement les prises de sang liées à mon suivi médical. »</em>
                  <br />
                  Après cette première séance de sophrologie, je vais préparer un protocole d’accompagnement, comprenant plusieurs séances, qui seront personnalisées selon vos besoins.
                  <br /><br />
                  Chaque séance de sophrologie comprend plusieurs temps d’échanges et la réalisation de deux types d’exercices :
            </div>
            <div className='w-full flex flex-col md:flex-row gap-8'>
              <div className="w-full md:w-1/2">
                <div className='relative w-full aspect-[16/9]'>
                  <Image
                    src="/images_site/exsolo_sophro1.webp"
                    alt="exercice"
                    fill
                    className="object-contain"
                  />
                </div>
                <p  className='text-lg text-plume pb-4 pt-4 text-center'>les exercices de relaxation dynamique</p>
                <p  className='text-lg text-plume pb-4 italic text-center'>Il s’agit d’exercices impliquant plusieurs enchaînements de mouvements doux (debout ou assis) ou statiques, s’appuyant sur la contraction musculaire et la respiration contrôlée pour atteindre la détente musculaire.</p>
              </div>
              <div className="w-full md:w-1/2">
                <div className='relative w-full aspect-[16/9]'>
                  <Image
                    src="/images_site/exsolo_sophro2.webp"
                    alt="exercice"
                    fill
                    className="object-contain"
                  />
                </div>
                <p  className='text-lg text-plume pb-4 pt-4 text-center'>les exercices de relaxation avec une visualisation mentale</p>
                <p  className='text-lg text-plume pb-4 italic text-center'>Il s’agit d’exercices réalisés en position assise ou allongée, qui permet de créer des ressentis positifs.</p>
              </div>
            </div>
            <div className='text-lg text-plume pb-4'>
              Dès la première séance, des exercices vous sont proposés, pour que vous puissiez découvrir la sophrologie. Cette première séance me permet également d’exposer les moyens utilisés (méthode et exercices) et les modalités pratiques. Ce temps permet de répondre à vos questions sur les modalités de prise en charge.
              <br /><br />
              Tous les exercices de sophrologie sont adaptables et personnalisables en fonction de votre condition physique (femme enceinte ou ayant juste accouché, personne ayant des difficultés à rester debout ou à bouger les bras, maladie impactant la mobilité…) et de votre âge.
              <br /><br />
              S’agissant d’une thérapie dite brève, les accompagnements durent en général entre 8 à 12 séances. Chaque séance a une intention particulière et s’inscrit dans le parcours d’accompagnement dont le but est d’atteindre progressivement l’objectif fixé lors de la première séance.
              <br /><br />
              Chaque séance dure environ 45 minutes. Elles peuvent être réalisées en cabinet ou à distance (visioconférence). Le choix du lieu de la séance vous appartient.
              <br /><br />
              Bien évidemment, je m’adapte à vos besoins et je peux vous proposer quelques séances autour notamment de l’évacuation du stress, ou encore si l’évènement prévu (ex : accouchement, passage d’un examen) est très proche (ex : entre 3 à 5 séances). Ici, il n’y aura pas d’atteinte d’un objectif. L’idée est de travailler sur des séances de relâchement, détente et lâcher prise.
              <br /><br />
              Votre implication pendant les séances et entre les séances est essentielle.  Vous vous entrainez chez vous, entre les séances, c’est-à-dire que vous pratiquez les exercices de relaxation, réalisés en séance. Il s’agit de vous rendre à terme autonome. Ainsi, vous pourrez mobiliser, en cas de besoin, les différents outils sophrologiques acquis. Mon objectif est que vous puissiez créer votre boîte à outils, dans laquelle vous pourrez « piocher » les exercices qui vous ont le plus marqué. Je vous transmets à l’issue des séances, des fiches avec les consignes des exercices de relaxation dynamique réalisés en séance.
            </div>
          </div>
          

          {/* 4 problématiques */}

          <div className='px-8 bg-plume py-8 w-full'>
            <div className='max-w-[1200px] mx-auto px-8'>
              <h2 className="text-3xl text-plume_clair pb-8">4 – Pour quelles problématiques peut-on recourir à la sophrologie ?</h2>
              <p className='text-lg text-plume_clair pb-4'>La sophrologie est une méthode permettant d’agir sur quatre thématiques principales :</p>
              <ul className='list-outside list-disc ml-4 md:hidden'>
                <li className='text-lg text-plume_clair pb-4 '>l’amélioration du quotidien (troubles du sommeil, gestion des émotions, anxiété, stress, changement personnel ou professionnel…) ;</li>
                <li className='text-lg text-plume_clair pb-4 '>la préparation mentale à un événement (intervention chirurgicale, accouchement,…) ; </li>
                <li className='text-lg text-plume_clair pb-4 '>l’accompagnement en complément d’un traitement médical (gestion des douleurs, endométriose, cancer, fibromyalgie…). Cet accompagnement nécessite obligatoirement de bénéficier d’une prise en charge médicale préalable ;</li>
                <li className='text-lg text-plume_clair pb-4 '>l’accompagnement de comportements pathologiques (phobies, addiction tabac,…). Pour cet accompagnement, un suivi médical et/ou psychologique préalable est fortement recommandé.</li>
              </ul>
              <div className='hidden md:grid grid-cols-2 grid-rows-2 gap-4 py-12'>
                <div className='col-start-1 row-start-1 flex flex-col items-center'>
                  <div className="relative w-20 h-20 pt-4">
                    <Image
                      src="/images_site/svg/picto-head-flash.svg"
                      alt="head"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className='text-lg text-plume_clair text-center pt-4'>l’amélioration du quotidien (troubles du sommeil, gestion des émotions, anxiété, stress, changement personnel ou professionnel…) ;</p>
                </div>
                <div className='col-start-2 row-start-1 flex flex-col items-center'>
                  <div className="relative w-20 h-20 pt-4">
                    <Image
                      src="/images_site/svg/picto_house.svg"
                      alt="house"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className='text-lg text-plume_clair text-center pt-4'>la préparation mentale à un événement (intervention chirurgicale, accouchement,…) ;</p>
                </div>
                <div className='col-start-1 row-start-2 flex flex-col items-center'>
                  <div className="relative w-20 h-20 pt-4">
                    <Image
                      src="/images_site/svg/picto_health-care.svg"
                      alt="health care"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className='text-lg text-plume_clair text-center pt-4'>l’accompagnement en complément d’un traitement médical (gestion des douleurs, endométriose, cancer, fibromyalgie…). Cet accompagnement nécessite obligatoirement de bénéficier d’une prise en charge médicale préalable ;</p>
                </div>
                <div className='col-start-2 row-start-2 flex flex-col items-center'>
                  <div className="relative w-20 h-20 pt-4">
                    <Image
                      src="/images_site/svg/picto_brain (1).svg"
                      alt="brain"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className='text-lg text-plume_clair text-center pt-4'>l’accompagnement de comportements pathologiques (phobies, addiction tabac,…). Pour cet accompagnement, un suivi médical et/ou psychologique préalable est fortement recommandé.</p>
                </div>
              </div>
              <div className='relative w-full max-w-[500px] mx-auto aspect-video'>
                <iframe
                  className="w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/TSao-p2F8hM?feature=oembed"
                  title="Pour quelles problématiques la sophrologie est-elle efficace?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          {/* 5 séance groupe */}
          <div className='px-8 bg-plume_clair py-8 max-w-[1200px] w-full mx-auto'>
            <h2 className="text-3xl text-plume pb-8">5 – Les séances de groupe</h2>
            <div className='text-lg text-plume pb-4'>
              Il est également possible de pratiquer la sophrologie en groupe.
              <br /><br />
              Cela peut être à travers des groupes dits « ouverts », lors de séances avec des intentions ponctuelles telles que :
            </div>
            <div className='flex flex-row justify-between mb-8 items-center w-full'>
              <p className='text-lg text-plume pr-8'>– Installer le calme / Evacuer la pression / Booster la confiance en soi / Activer la vitalité.</p>
              <div className='flex'>
                <div className='relative w-18 h-18'>
                    <Image
                        src="/images_site/svg/picto_heart.svg"
                        alt="heart"
                        fill
                        className="object-contain"
                      />
                  </div>
              </div>  
            </div>
            <div className='text-lg text-plume '>
              Cela peut également être à travers des groupes dits « fermés ». L’ensemble des personnes suivent alors toutes les séances d’un parcours d’accompagnement défini par un objectif commun. 
              <br /><br />
              A titre d’exemple, les groupes fermés peuvent être constitués au sein d’une entreprise, d’un institut de santé, d’un lieu de vie ou encore d’un établissement scolaire ou encore pour une thématique donnée. Leurs objectifs peuvent concerner la performance, la concentration, l’énergie, la gestion du stress, la communication …
            </div>
          </div>
          
          {/* 6 contre indications */}
          <div className='px-8 bg-plume py-8 w-full'>
            <div className='max-w-[1200px] mx-auto px-8'>
              <h2 className="text-3xl text-plume_clair pb-8">6 – Y a-t-il des contre-indications ?</h2>
              <div className="text-lg text-plume_clair">
                La sophrologie ne se substitue pas à une prise en charge médicale.
                <br /><br />
                Il convient de ne pas réaliser de séance avec des personnes souffrant de troubles psychiatriques et notamment de schizophrénie et/ou lors des phases délirantes et en tout état de cause, hors la présence d’un personnel médical.
                <br /><br />
                Selon le principe de réalité objective, une autre impossibilité est liée à la limite même du sophrologue, de son expérience ou de ses capacités.
                <br /><br />
                Contactez-moi pour toute question.
              </div>
            </div>
          </div>

          <Coordonnees variant="clair"/>

      </main>
       <Footer variant="fonce"/>
    </div>

  );
}