'use client'
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import useScrollProgress from '@/hooks/useScrollProgress.tsx';

const variant = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 }
}

const Template = (
    { children }: { children: ReactNode }
) => {

    const completion = useScrollProgress();

    return (
        <>
            <motion.main
                // variants={variant}
                // initial="hidden"
                // animate="enter"
                // transition={{ type: 'linear', delay: 0.2, duration: 0.4 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.75 }}
            >
                {children}
            </motion.main>
            {/* completion bar*/}
            <span
                style={{ transform: `translateY(${completion - 100}%)` }}
                className='fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700'>
            </span>
            <div className='h-[4000px]'></div>
        </>
    );
}

export default Template;