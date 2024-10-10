import Image from "next/image";
import { AppContainer } from "../container";
import Link from "next/link";
import BackButton from "../backButton";

export interface CountryDetailProps {
    cca3: string;
    flag: string;
    alt: string;
    name: string;
    population: string;
    region: string;
    capital: string;
    subregion: string;
    nativeNameCommon: string;
    currencies: string;
    languages: string;
    border: string[];
    tld: string;
}

export default function CountryDetails(props: CountryDetailProps) {
    return (
        <section>
            <AppContainer>
                <div className=" relative top-16 flex items-end mx-40">
                    <BackButton/>
                </div>
                <div className="flex justify-center gap-8 items-center mt-[10%] md:flex-row flex-col mx-40 ">
                    <div className="w-full h-[28rem]">
                        <Image
                            src={props.flag}
                            alt={props.alt}
                            className="w-full h-full"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div className="w-full text-primary grid grid-cols-2 items-center px-10 col-span-2 text-[1rem]">
                        <div className="space-y-2">
                            <h1 className="my-4 font-bold">{props.name}</h1>
                            <p>Native Name: <span className="text-gray-400">{props.nativeNameCommon}</span></p>
                            <p>Population: <span className="text-gray-400">{props.population}</span></p>
                            <p>Sub Region: <span className="text-gray-400">{props.subregion}</span></p>
                            <p>Region: <span className="text-gray-400">{props.region}</span></p>
                            <p>Capital: <span className="text-gray-400">{props.capital}</span></p>
                        </div>
                        <div className="space-y-2">
                            <p>Top Level Domain: <span className="text-gray-400">{props.tld}</span></p>
                            <p>Currencies: <span className="text-gray-400">{props.currencies}</span></p>
                            <p>Languages: <span className="text-gray-400">{props.languages}</span></p>
                        </div>
                        <div className="col-span-2 mt-28">
                            <div className="flex flex-wrap gap-2 space-y-2 items-center">
                                <p className="mt-2">Border Countries:</p>
                                <div className=" flex gap-2 justify-center flex-wrap ">
                                    {props.border.length > 0 ? (
                                        props.border.map((country, index) => (
                                            <Link key={index} href={`/flag/${country.split('-')[1]}`} passHref>
                                                <button className=" rounded-md text-primary hover:bg-slate-600 hover:text-white shadow-md bg-primary-foreground cursor-pointer w-28 h-full py-2">
                                                    {country.split('-')[0]}
                                                </button> 
                                            </Link>
                                        ))
                                    ) : (
                                        <span className="text-gray-400">None</span>
                                    )}
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </AppContainer>
        </section>
    );
}
