"use client";
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { RegionList } from './RegionList';
import CountryList from './countryList';
import CountrySearch from './countrySearch';
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

  const { data } = useQuery<Country[]>({
    queryKey: ['countries', selectedRegion],
    queryFn: () => fetchCountries(selectedRegion),
  });

  const filteredCountries = data?.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="">
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
          {showRegionList && <RegionList setSelectedRegion={setSelectedRegion} />}
        </div>
      </div>
      <div className="text-black" onClick={() => setShowRegionList(false)}>
        <CountryList countries={filteredCountries} />
      </div>
     </AppContainer>
    </div>
  );
}
