import CountriesInfo from "./components/countriesCard/fetchCountriesData";
import SearchBar from "./components/searchBar";
import { Provider } from "./utils/Provider";

export default function Home() {
  return (
    <>
      <Provider>
        <SearchBar />
        <CountriesInfo />
      </Provider>
    </>
  );
}