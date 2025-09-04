import clsx from 'clsx';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function Coordonnees({variant = "clair"}: {variant?: string}) {

    const bgColor = variant === "clair" ? 'bg-plume_clair' : 'bg-plume';
    const bgBtn = variant === "clair" ? 'bg-plume' : 'bg-plume_clair';
    const hoverBtn = variant === "clair" ? 'bg-plume' : 'bg-plume_btn_clair';
    const textColor = variant === "clair" ? 'text-plume' : 'text-plume_clair';
    const textBtn = variant === "clair" ? 'text-plume_clair' : 'text-plume';
    const imageSrc = variant === "clair" ? "/images_site/avatar_fonce.webp" : "/images_site/avatar_clair.webp";

    return (
     <div className={`flex flex-col w-full ${bgColor} items-center`}>
        <div className={`flex flex-col max-w-[1200px] md:grid md:grid-cols-2 md:auto-rows-auto gap-4 ${bgColor} py-12 px-8`}>
            <div className={`flex md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-1 ${textColor} text-3xl h-auto`}>Coordonnées</div>
            <div className="flex self-end md:self-start md:justify-self-center md:col-start-2 md:col-end-2 md:row-start-1 md:row-end-3 h-auto">
              <div className="relative w-44 h-44 md:w-80 md:h-80">
                <Image
                  src={imageSrc}
                  alt="coordonnées"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className={`flex flex-col md:col-start-1 md:col-end-1 md:row-start-2 md:row-end-2 ${textColor}`}>
              <p className="text-2xl">Audrey</p>
              <p className="text-2xl">contact@plume-et-harmonie.fr</p>
              <a
                href="https://www.instagram.com/plume_et_harmonie"
                target="_blank"
                rel="noopener noreferrer"
                className={`${textBtn} mt-2`}
              >
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${bgBtn}`}>
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
                className={`text-2xl ${textColor}`}
              >
                <p>@plume_et_harmonie</p>
              </a>
              <p className={`text-2xl ${textColor} mt-2`}>06.63.01.92.16</p>
              <p className={`text-2xl ${textColor} mt-2`}>Lundi – mardi – mercredi – jeudi</p>
              <p className={`text-2xl ${textColor} mt-2`}>en visio : 8h-19h</p>
              <p className={`text-2xl ${textColor} mt-2`}>Vendredi en cabinet de 8h30 à 20h :</p>
              <p className={`text-2xl ${textColor} mt-2`}>21 rue de la Garenne – 44690 La Haye Fouassière</p>
              <Button className={`rounded-full ${bgBtn} hover:${hoverBtn} ${textBtn} hover:${textColor} shadow-md transition-colors duration-300 w-fit mt-8`}>Découvrir</Button>
            </div>
        </div>
    </div>
  );
}
