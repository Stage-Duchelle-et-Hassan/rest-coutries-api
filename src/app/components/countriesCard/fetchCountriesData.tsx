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
  return (await fetch(region ? `https://restcountries.com/v3.1/region/${region}` : "https://restcountries.com/v3.1/all").then((res) =>
    res.json()
  )) as Country[];
}

export default function CountriesInfo() {
  const [showRegionList, setShowRegionList] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, isLoading } = useQuery<Country[]>({
    queryKey: ['countries', selectedRegion],
    queryFn: () => fetchCountries(selectedRegion),
  });

  console.log(data && data[0].cca3);
  

  const filteredCountries = data?.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };




  if (isLoading) {
    return (
      <div className="flex flex-row items-center justify-center gap-2 w-full h-96">
        <div className="w-6 h-6 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
        <div className="w-6 h-6 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-6 h-6 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
      </div>
    )
  }
  return (
    <>
      <AppContainer>
        <div className='flex items-center justify-between mx-40'>
          <div>
            <CountrySearch searchTerm={searchTerm} handleInputChange={handleInputChange} />
          </div>
          <div className="pr-4">
            <button
              className="flex justify-between items-center bg-primary-foreground shadow-md w-48 px-4 h-9 cursor-pointer rounded-sm"
              onClick={() => setShowRegionList(!showRegionList)}
            >
              <p className="text-primary">Filter by region</p>
              <ChevronDown className="text-primary" />
            </button>
            {showRegionList && <RegionList setSelectedRegion={setSelectedRegion} setShowRegionList={setShowRegionList} />}
          </div>
        </div>
        <div className="text-black" onClick={() => setShowRegionList(false)}>
          <CountryList countries={filteredCountries} />
        </div>
      </AppContainer>
    </>
  );
}
