'use client'

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton (){
    const router = useRouter()
    return(
        <button className="w-28 py-2 px-4  shadow-3xl flex items-center justify-around   text-primary-foreground rounded-sm" onClick={()=> router.back()}> 
            <ArrowLeft className="text-primary"/>
            <p className="text-primary"> Back</p>
        </button>
    )
}