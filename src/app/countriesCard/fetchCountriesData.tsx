"use client"

import { useQuery } from '@tanstack/react-query';
import CountryCard from "./Card";

export interface Country {
    cca3: string,
    name: {
      common: string
    };
    flags : {
        svg: string
        alt: string
    },
    population : string,
    region : string,
    capital : string
  }

  async function fetchCountries() {
    return (await fetch("https://restcountries.com/v3.1/all").then((res) =>
      res.json()
    )) as Country[]
  }

   export default function CountriesInfo() {
    const { data } = useQuery<Country[]>({
      queryKey: ['countries'],
      queryFn: () => fetchCountries(),
    });
  
     
      return (
        <div className=' flex flex-ro text-black'>
          <div className=' flex gap-16 flex-wrap items-center justify-center'>
            {data?.map((country) => (
                  <CountryCard 
                    key  = {country.cca3}
                    name ={country.name.common}
                    flag = {country.flags.svg}
                    alt = {country.flags.alt}
                    population = {country.population}
                    region = {country.region}
                    capital = {country.capital} 
                  />
              ))}
          </div>
        </div>
      );
  }
  