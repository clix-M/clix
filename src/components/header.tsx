'use client'
import React, { useState, useEffect } from "react";
// import Logo from "./Logo";


import ThemeToggler from "./theme-toggler";
// import Nav from "./Nav";
// import MobileNav from "./MobileNav";

import { usePathname } from "next/navigation";

export const Header = () => {

    const [header, setHeader] = useState(false);
    const path = usePathname();
    
    useEffect(()=>{
        const scrollYPossition = () => {
            window.scrollY > 10 ? setHeader(true) : setHeader(false);
        };

        window.addEventListener('scroll', scrollYPossition);

        // remove event
        return () => {
            window.removeEventListener('scroll', scrollYPossition);
        };

    })

    return (
        <header
        className={`${
            header 
            ? 'py-1 bg-transparent shadow-lg  dark:shadow-sm dark:shadow-slate-200'
            : 'py-1 dark:bg-transparent'
        } sticky top-0 z-30 transition-all ${path ==='/' && 'bg-white dark:bg-zinc-900'}`}
        >
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* <Logo /> */}
                    <div className="flex items-center gap-x-6">

                        {/* <Nav containerStyles="hidden xl:flex gap-x-8 items-center" 
                        linkStyles='relative hover:text-primary transition-all'
                        underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
                        />
                        <ThemeToggler />

                        <div className="xl:hidden">
                            <MobileNav /> 
                            
                        </div> */}

                    </div>
                </div>
            </div>
        </header >
    );
}
