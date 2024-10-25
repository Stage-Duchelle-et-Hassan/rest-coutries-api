"use client";
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { RegionList } from './RegionList';
import CountryList from './countryList';
import CountrySearch from '../countrySearch';
import { AppContainer } from '../container';
import Loader from '../loader';

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
    return(
      <Loader/>
    )
  }

  return (
    <>
      <div className='sm:mt-20 mt-5'>
        <AppContainer>
            <div className='flex flex-col sm:flex-row items-center sm:justify-between mx-auto md:mx-44 mb-10 sm:my-4'>
              <CountrySearch searchTerm={searchTerm} handleInputChange={handleInputChange} />
              <div>
                <button
                  className="flex justify-between items-center bg-primary-foreground shadow-md w-48 px-4 py-3  cursor-pointer rounded-sm"
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
      </div>
    </>
  );
}
