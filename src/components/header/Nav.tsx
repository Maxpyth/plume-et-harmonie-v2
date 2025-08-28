"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navlinks = () => {

    const pathname = usePathname();
    return (
        <>
            <Link href="/" className={`hover:font-bold hover:underline ${pathname === "/" ? "font-bold underline" : ""}`}>Accueil</Link>
            <Link href="/sophrologie" className={`hover:font-bold hover:underline ${pathname === "/sophrologie" ? "font-bold underline" : ""}`}>Sophrologie</Link>
            <Link href="/sonotherapie" className={`hover:font-bold hover:underline ${pathname === "/sonotherapie" ? "font-bold underline" : ""}`}>Sonothérapie</Link>
            <Link href="/tarifs" className={`hover:font-bold hover:underline ${pathname === "/tarifs" ? "font-bold underline" : ""}`}>Tarifs</Link>
            <Link href="/qui-suis-je" className={`hover:font-bold hover:underline ${pathname === "/qui-suis-je" ? "font-bold underline" : ""}`}>Qui suis-je?</Link>
            <Link href="/evenements" className={`hover:font-bold hover:underline ${pathname === "/evenements" ? "font-bold underline" : ""}`}>Evenements</Link>

        </> 
    );
}

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className='flex w-2/3 justify-end items-center'>
                <div className='hidden w-full justify-between  md:flex text-plume '>
                    <Navlinks />
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleNavbar}>
                        {isOpen ? <X className='stroke-plume'/> : <Menu className='stroke-plume'/>}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className='flex flex-col items-center basis-full text-plume'>
                    <Navlinks />
                </div>
            ) }
        
        </>
             
    );
}

export default Nav;

