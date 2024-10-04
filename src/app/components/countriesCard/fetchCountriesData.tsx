"use client"

import { useQuery } from '@tanstack/react-query';
import CountryCard from "./Card";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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

  async function fetchCountries(region?: string) {
    return (await fetch( region ? `https://restcountries.com/v3.1/region/${region}` : "https://restcountries.com/v3.1/all").then((res) =>
      res.json()
    )) as Country[]
  }

   export default function CountriesInfo() {
    const [show , setShow] = useState(true)
    const [selectedRegion, setSelectedRegion] = useState<string | undefined>(undefined);

    const { data } = useQuery<Country[]>({
      queryKey: ['countries', selectedRegion],
      queryFn: () => fetchCountries(selectedRegion),
    });
    
      
   
      return (
        <>
        <div className=' flex flex-col gap-48 items-end'>
          <div className=' fixed top-28 right-48 z-50'>
            <div className="  flex justify-between items-center bg-primary-foreground shadow-md w-48 px-4 h-9 cursor-pointer  rounded-sm" onClick={()=> setShow(!show)}>
                <p className=' text-primary'>Filter by region</p>
                <ChevronDown className=' text-primary'/>
            </div>
            {show && <RegionList setSelectedRegion = {setSelectedRegion}/>}
          </div>
          <div className=' flex text-black' onClick={()=> setShow(false)}>
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
        </div>
        
        </>
        
      );
  }
  export const RegionList  = (props) =>{

    const continents = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
        
    return(
           <div className=" flex flex-col items-start mt-2 bg-primary-foreground  shadow-md rounded-sm absolute z-50 w-48 ">
                {continents.map((continent) => (
                    <button className="hover:bg-slate-600 hover:text-white w-full text-start pl-4 py-2 text-primary"
                        key={continent}
                        onClick={() => props.setSelectedRegion(continent === 'All' ? undefined : continent.toLowerCase())}
                    >
                        {continent}
                    </button>
                ))}
           </div>
       )
 }