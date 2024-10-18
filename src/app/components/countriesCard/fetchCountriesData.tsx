"use client";
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { RegionList } from './RegionList';
import CountryList from './countryList';
import CountrySearch from '../countrySearch';
import { AppContainer } from '../container';

export interface Country {
  cca3: string;
  name: {
    common: string;
  };
  flags: {
    svg: string;
    alt: string;
  };
  population: string;
  region: string;
  capital: string;
}

async function fetchCountries(region?: string) {
  return (await fetch(region ? 
    `https://restcountries.com/v3.1/region/${region}` 
    : 
    "https://restcountries.com/v3.1/all").then((res) =>
    res.json()
  )) as Country[];
}

export default function CountriesInfo() {
  const [showRegionList, setShowRegionList] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<string | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [changeFilterButtonName, setChangeFilterButtonName] = useState<string>("Filter by Region");

  const { data, isLoading } = useQuery<Country[]>({
    queryKey: ['countries', selectedRegion],
    queryFn: () => fetchCountries(selectedRegion),
  });

  const filteredCountries = data?.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  if (isLoading) {
    return (
      <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-row items-center justify-center gap-2">
        <div className="w-6 h-6 rounded-full bg-blue-500 animate-bounce [animation-delay:.7s]"></div>
        <div className="w-6 h-6 rounded-full bg-blue-500  animate-bounce [animation-delay:.3s]"></div>
        <div className="w-6 h-6 rounded-full bg-blue-500  animate-bounce [animation-delay:.7s]"></div>
      </div>
    );
  }

  return (
    <>
      <AppContainer>
        <div className='flex flex-col sm:flex-row items-center justify-between mx-auto md:mx-40 my-10 sm:my-4'>
          <CountrySearch searchTerm={searchTerm} handleInputChange={handleInputChange} />
          <div className="pr-4">
            <button
              className="flex justify-between items-center bg-primary-foreground shadow-md w-72 mx-auto sm:w-48 px-4 h-9 cursor-pointer rounded-sm"
              onClick={() => setShowRegionList(!showRegionList)}
            >
              <p className="text-primary">{changeFilterButtonName}</p>
              <ChevronDown className="text-primary" />
            </button>
            {showRegionList && 
              <RegionList 
                setSelectedRegion={setSelectedRegion} 
                setShowRegionList={setShowRegionList} 
                setChangeFilterButtonName={setChangeFilterButtonName}
              />
            }
          </div>
        </div>
        <div className="text-black" onClick={() => setShowRegionList(false)}>
          <CountryList countries={filteredCountries} />
        </div>
      </AppContainer>
    </>
  );
}
