import Image from "next/image";
import { Navbar01 } from '@/components/ui/shadcn-io/navbar-01';
import Header from '../components/header/Header';
import {Button} from '@/components/ui/button';
import CarouselSpacing from '@/components/carousel-plume/carousel_plume';
import Link from 'next/link';
import { Separator } from "@/components/ui/separator";
import Coordonnees from "@/components/coordonnees/coordonnees";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen">
      <div className="relative w-full">
        <Header />
      </div>
      <main className="w-full">
        <div className="relative w-full h-[690px] md:h-[800px]">
          <Image
            src="/images_site/bol_head.webp"
            alt="Massage sonore"
            fill
            priority           
            className="object-cover object-center md:object-[center_75%]"
          />
          <div className="md:hidden absolute inset-0 left-0 right-0 top-[150px] flex flex-col items-end text-white">
            <p className="text-5xl pb-4">Sophrologie</p>
            <p className="text-5xl">Sonothérapie</p>
          </div>
          <div className="absolute hidden md:grid left-0 right-0 top-[150px] justify-items-center text-white">
            <h1 className="text-7xl pb-20">Plume et Harmonie</h1>
            <div className="flex flex-col items-center">
              <p className="text-4xl text-center">Un cocon de douceur pour retrouver son équilibre intérieur</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-[1200px] pb-20">
            <div className="pt-20 flex items-center justify-center text-plume text-3xl text-center pb-20 px-4">Améliorer son quotidien et prendre soin de soi</div>
            <div className="flex flex-col md:flex-row md:justify-between md:gap-12 w-full px-8 pb-20">
              <div className="flex justify-center md:justify-start w-full items-end md:w-1/3 md:min-w-[328px] mb-4 md:mb-0">
                <div className="relative w-[328px] h-[328px] md:h-[360px]">
                  <Image
                    src="/images_site/sophrologie.webp"
                    alt="Sophrologie"
                    fill
                    className="object-cover rounded-t-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h1 className="text-plume text-center pt-16 pb-12 text-3xl">Sophrologie</h1>
                <p className="text-plume text-justify pb-8 text-lg">Accueillir ses émotions, respirer en conscience, gérer son stress et son anxiété, gérer et soulager au mieux ses douleurs, faire pause, se sentir détendue et sereine, vivre sa grossesse en étant détendue, mieux vivre avec son endométriose… et si vous tentiez la sophrologie pour retrouver votre harmonie intérieure ?</p>
                <div className="flex justify-center md:justify-start">
                  <Button className="rounded-full bg-plume_btn_clair hover:bg-plume text-plume hover:text-plume_clair shadow-md transition-colors duration-300">Découvrir</Button>
                </div>
                
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row md:justify-between md:gap-12 w-full px-8">
              
              <div className="w-full  md:w-2/3">
                <h1 className="text-plume text-center pt-16 pb-12 text-3xl">Sonothérapie</h1>
                <p className="text-plume text-justify pb-8 text-lg">Accéder à un état de bien-être et de relâchement avec les sons et  les vibrations, se détendre, évacuer les tensions et le stress, se relaxer en se laissant bercer par les sons, voyager avec les sons, se laisser porter et lâcher prise ? Et si vous expérimentiez un massage sonore ou une relaxation sonore pour apaiser votre corps et votre mental ? Une pratique accessible également aux femmes enceintes.</p>
                <div className="flex justify-center md:justify-start">
                  <Button className="rounded-full bg-plume_btn_clair hover:bg-plume text-plume hover:text-plume_clair shadow-md transition-colors duration-300">Découvrir</Button>
                </div>
              </div>
              <div className="flex justify-center md:justify-end w-full items-end md:w-1/3 md:min-w-[328px] mb-4 md:mb-0">
                <div className="relative w-[328px] h-[328px] md:h-[360px]">
                  <Image
                    src="/images_site/Sonotherapie.webp"
                    alt="Sonothérapie"
                    fill
                    className="object-cover rounded-t-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full bg-plume">
          <h2 className="mb-20 mt-20 text-plume_clair text-3xl">Les pratiques proposées</h2>
          <CarouselSpacing/>
        </div>

        {/* gestion partie accompagnement*/}
        
        <div className="flex flex-col w-full pt-20 pb-20">
          <h2 className="text-plume text-center text-3xl pb-20">Un accompagnement personnalisé</h2>
          <div className="flex w-full px-8">
            <div className="relative hidden md:flex w-3/5 ">
              <Image
                src="/images_site/montagne.webp"
                alt="Accompagnement"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full md:w-2/5 ">
              <div className="flex flex-row gap-4">
                <div className="relative w-10 h-16 pt-4">
                  <Image
                    src="/images_site/svg/picto_mail.svg"
                    alt="email"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col w-full mb-4">
                  <div className="bg-plume/20 rounded-full w-full flex items-center justify-center h-16 mb-4">
                    <p className="text-plume text-center text-lg">Prise de contact</p>
                  </div>
                  <p className="text-plume text-center text-lg">06.63.01.92.16</p>
                  <p className="text-plume text-center text-lg">contact@plume-et-harmonie.fr</p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="relative w-10 h-16 pt-4">
                  <Image
                    src="/images_site/svg/picto_group.svg"
                    alt="group"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col w-full mb-4">
                  <div className="bg-plume/20 rounded-full w-full flex items-center justify-center h-16 mb-4">
                    <p className="text-plume text-center text-lg">Notre rencontre</p>
                  </div>
                  <p className="text-plume text-center text-lg">Etre à l’écoute de vos besoins et de vos ressentis, pour mieux vous accompagner</p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="relative w-10 h-16 pt-4">
                  <Image
                    src="/images_site/svg/picto_heart.svg"
                    alt="heart"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="bg-plume/20 rounded-full w-full flex items-center justify-center h-16">
                    <p className="text-plume text-center text-lg">Une pratique personnalisée et adaptée</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* gestion partie coordonnées*/}
        <div className="flex flex-col w-full bg-plume items-center">
          <div className="flex flex-col max-w-[1200px] md:grid md:grid-cols-2 md:auto-rows-auto gap-4 bg-plume py-12 px-8">
            <div className="flex md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-1 text-plume_clair text-3xl h-auto">Coordonnées</div>
            <div className="flex self-end md:self-start md:justify-self-center md:col-start-2 md:col-end-2 md:row-start-1 md:row-end-3 h-auto">
              <div className="relative w-44 h-44 md:w-80 md:h-80">
                <Image
                  src="/images_site/avatar_clair.webp"
                  alt="Accompagnement"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col md:col-start-1 md:col-end-1 md:row-start-2 md:row-end-2 text-plume_clair">
              <p className="text-2xl text-plume_clair">Audrey</p>
              <p className="text-2xl text-plume_clair">contact@plume-et-harmonie.fr</p>
              <a
                href="https://www.instagram.com/plume_et_harmonie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-plume mt-2"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-plume_clair">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.428.415a4.92 4.92 0 011.675 1.01 4.92 4.92 0 011.01 1.675c.175.458.36 1.258.415 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.415 2.428a4.92 4.92 0 01-1.01 1.675 4.92 4.92 0 01-1.675 1.01c-.458.175-1.258.36-2.428.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.428-.415a4.92 4.92 0 01-1.675-1.01 4.92 4.92 0 01-1.01-1.675c-.175-.458-.36-1.258-.415-2.428C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.415-2.428a4.92 4.92 0 011.01-1.675 4.92 4.92 0 011.675-1.01c.458-.175 1.258-.36 2.428-.415C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.741 0 8.332.014 7.052.072 5.78.13 4.673.346 3.73.694a7.08 7.08 0 00-2.55 1.644A7.08 7.08 0 00.694 4.73c-.348.943-.564 2.05-.622 3.322C.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.272.274 2.379.622 3.322a7.08 7.08 0 001.644 2.55 7.08 7.08 0 002.55 1.644c.943.348 2.05.564 3.322.622C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.272-.058 2.379-.274 3.322-.622a7.08 7.08 0 002.55-1.644 7.08 7.08 0 001.644-2.55c.348-.943.564-2.05.622-3.322.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.272-.274-2.379-.622-3.322a7.08 7.08 0 00-1.644-2.55 7.08 7.08 0 00-2.55-1.644c-.943-.348-2.05-.564-3.322-.622C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                  </svg>
                </div>
                
              </a>
              <a
                href="https://www.instagram.com/plume_et_harmonie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-plume_clair"
              >
                <p>@plume_et_harmonie</p>
              </a>
              <p className="text-2xl text-plume_clair mt-2">06.63.01.92.16</p>
              <p className="text-2xl text-plume_clair mt-2">Lundi – mardi – mercredi – jeudi</p>
              <p className="text-2xl text-plume_clair mt-2">en visio : 8h-19h</p>
              <p className="text-2xl text-plume_clair mt-2">Vendredi en cabinet de 8h30 à 20h :</p>
              <p className="text-2xl text-plume_clair mt-2">21 rue de la Garenne – 44690 La Haye Fouassière</p>
              <Button className="rounded-full bg-plume_clair hover:bg-plume_btn_clair text-plume hover:text-plume_clair shadow-md transition-colors duration-300 w-fit mt-8">Découvrir</Button>
            </div>
          </div>
        </div>

      </main>
      <footer className="flex flex-row justify-end h-5 space-x-4 text-sm w-full px-8 my-4 color-plume">
        <Link href="/mentions-legales" className="text-plume">Mentions légales </Link>
        <Separator className="color-plume" orientation="vertical" /> 
        <Link href="/mentions-legales" className="text-plume">CGV</Link> 
        <Separator className="color-plume" orientation="vertical" /> 
        <Link href="/mentions-legales" className="text-plume">Politique de confidentialité</Link>
      </footer>
    </div>
  );
}
