'use client'
import { useState, useEffect } from "react";

const useScrollProgress = () => {
    const [completion, setCopletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentPogre = window.scrollY
            const scrollHeight = document.body.scrollHeight - window.innerHeight

            if (scrollHeight) {
                setCopletion(Number((Number(currentPogre) / Number(scrollHeight)).toFixed(2)) * 100)
            }
        }

        window.addEventListener('scroll', updateScrollCompletion)
        return () => window.removeEventListener('scroll', updateScrollCompletion)


    }, [])


    return completion

}

export default useScrollProgress;

