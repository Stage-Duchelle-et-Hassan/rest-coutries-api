import Image from "next/image";
import { AppContainer } from "../container";
import Link from "next/link";

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
                <div className="rounded-xl flex mx-40 gap-20 my-[10%] h-[28rem]">
                    <div className="relative w-full">
                        <Image
                            src={props.flag}
                            alt={props.alt}
                            layout="fill"
                            objectFit="cover"
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
                        <div className="col-span-2">
                            <div className="flex flex-wrap gap-2 space-y-2 items-center">
                                <p className="mt-2">Border Countries:</p>
                                {props.border.length > 0 ? (
                                    props.border.map((country, index) => (
                                        <Link key={index} href={`/flag/${country.split('-')[1]}`} passHref>
                                            <span className="p-2 rounded-md text-gray-400 shadow-md bg-primary-foreground cursor-pointer">
                                                {country.split('-')[0]}
                                            </span>
                                        </Link>
                                    ))
                                ) : (
                                    <span className="text-gray-400">None</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </AppContainer>
        </section>
    );
}
