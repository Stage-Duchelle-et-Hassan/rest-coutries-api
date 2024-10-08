import { ArrowLeft } from "lucide-react";


export default function BackButton (){
    return(
        <button className="w-28 py-2 px-4  shadow-xl flex items-center justify-around  text-primary-foreground rounded-sm">
            <ArrowLeft className="text-primary"/>
            <p className="text-primary"> Back</p>
        </button>
    )
}