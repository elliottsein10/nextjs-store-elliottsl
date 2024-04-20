"use client"
import { Hero } from "app/components/home/Hero"
import { Description } from "app/components/home/Description"
import { useEffect } from "react"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    
    useEffect(() => {
        console.log('envío de métricas')
    }, [])

    return (
        <div>
            <Hero />
            <Description />
            {children}
        </div>
    )
}