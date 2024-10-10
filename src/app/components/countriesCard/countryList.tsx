"use client"
import Link from "next/link";
import { AppContainer } from "../container";
import CountryCard from "../countriesCard/Card";
import { Country } from "../countriesCard/fetchCountriesData"; 

interface CountryListProps {
  countries: Country[] | undefined;
}

export default function CountryList({ countries }: CountryListProps) {
  return (
    <AppContainer>
      <div className="flex gap-16 flex-wrap items-center justify-center md:px-4">
      {(countries && countries.length > 0) ? countries.map((country) => (
        <Link
        key={country.cca3}
        href={`/flag/${country.cca3}`}
        >
         <CountryCard
          name={country.name.common}
          flag={country.flags.svg}
          alt={country.flags.alt}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
        </Link>
      )) : (
        <div className="text-primary">Oops there is a typing error !</div>
      )}
    </div>
    </AppContainer>
  );
}
