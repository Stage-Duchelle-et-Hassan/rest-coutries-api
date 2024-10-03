import  CountriesInfo  from "./countriesCard/fetchCountriesData";

import SearchBar from "./components/searchBar";
import CountryCard from "./countriesCard/Card";
import { Provider } from "./utils/Provider";

export default function Home() {
  return (
    <>
      <CountriesInfo/>
    </>
    <Provider>
      <SearchBar />
      <CountryCard />
    </Provider>
  );
}