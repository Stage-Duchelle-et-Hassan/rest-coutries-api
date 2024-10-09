import CountryDetails from "@/app/components/countriesDetail/country";

export interface CountryData {
    cca3: string;
    flags: { svg: string; alt?: string };
    name: {
        common: string;
        nativeName: { [key: string]: { common: string } };
    };
    population: number;
    region: string;
    capital: string[];
    subregion: string;
    currencies: { [key: string]: { name: string } };
    languages: { [key: string]: string };
    borders?: string[];
    tld?: string[];
}

async function fetchCountries(): Promise<CountryData[]> {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/all`);
        if (!res.ok) {
            throw new Error('Failed to fetch countries');
        }
        return res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

function extractCountryDetails(flag: CountryData, countries: CountryData[]) {
    const nativeNameCommon = flag.name?.nativeName
        ? Object.values(flag.name.nativeName)[0]?.common : '';

    const currencies = flag.currencies
        ? Object.values(flag.currencies).map(currency => currency.name).join(', ') : '';

    const languages = flag.languages
        ? Object.values(flag.languages).join(', ') : '';

    const borderNames = flag.borders?.map(code => {
        const country = countries.find(c => c.cca3 === code);
        return country ? `${country.name.common}-${country.cca3}` : code;
    }) || [];


    const tld = flag.tld ? flag.tld.join(', ') : '';

    return {
        nativeNameCommon,
        currencies,
        languages,
        borderNames,
        tld,
    };
}

export default async function FlagDetails({ params }: { params: { flag_id: string } }) {
    const countries = await fetchCountries();

    const flag = countries.find(element => element.cca3 === params.flag_id);
    if (!flag) {
        return <div>The element is not found</div>;
    }


    const { nativeNameCommon, currencies, languages, borderNames, tld } = extractCountryDetails(flag, countries);

    return (
        <div>
            <CountryDetails
                flag={flag.flags.svg}
                alt={flag.flags.alt || `${flag.name.common} flag`}
                name={flag.name.common}
                population={flag.population.toLocaleString()}
                region={flag.region}
                capital={flag.capital?.[0]}
                subregion={flag.subregion}
                nativeNameCommon={nativeNameCommon}
                currencies={currencies}
                languages={languages}
                border={borderNames}
                tld={tld}
                cca3={flag.cca3}
            />
        </div>
    );
}
