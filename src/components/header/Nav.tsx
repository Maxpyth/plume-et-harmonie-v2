"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navlinks = () => {
  return (
    <>
        <Link href="/">Accueil</Link>
        <Link href="/Sophrologie">Sophrologie</Link>
        <Link href="/">Sonothérapie</Link>
        <Link href="/">Qui suis-je?</Link>
        <Link href="/">Evenements</Link>

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
                <div className='hidden w-full justify-between  md:flex text-plume'>
                    <Navlinks />
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleNavbar}>
                        {isOpen ? <X/> : <Menu/>}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className='flex flex-col items-center basis-full'>
                    <Navlinks />
                </div>
            ) }
        
        </>
             
    );
}

export default Nav;

