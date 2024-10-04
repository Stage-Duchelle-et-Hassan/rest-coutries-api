"use client"
import CountryCard from "@/app/components/countriesCard/Card";
import { Country } from "@/app/components/countriesCard/fetchCountriesData"; 

interface CountryListProps {
  countries: Country[] | undefined;
}

export default function CountryList({ countries }: CountryListProps) {
  return (
    <div className="flex gap-16 flex-wrap items-center justify-center md:px-4">
      {(countries && countries.length > 0) ? countries.map((country) => (
        <CountryCard
          key={country.cca3}
          name={country.name.common}
          flag={country.flags.svg}
          alt={country.flags.alt}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      )) : (
        <div className="text-primary">Oops there is a typing error !</div>
      )}
    </div>
  );
}
