import Link from "next/link";
import { Separator } from "../ui/separator";


export default function Footer({variant="clair"}: {variant?: string}) {

    const bgColor = variant === "clair" ? 'bg-plume_clair' : 'bg-plume';
    const color = variant === "clair" ? 'plume' : 'plume_clair';
    
    return (
        <footer className={`flex flex-row justify-end items-center h-12 space-x-4 text-sm w-full px-8 py-4 ${bgColor}`}>
            <Link href="/mentions-legales" className={`text-${color}`}>Mentions légales </Link>
            <Separator className={`bg-${color}`} orientation="vertical" />
            <Link href="/mentions-legales" className={`text-${color}`}>CGV</Link> 
            <Separator className={`bg-${color}`} orientation="vertical" /> 
            <Link href="/mentions-legales" className={`text-${color}`}>Politique de confidentialité</Link>
        </footer>
    );
}