import SearchBar from "./components/searchBar";
import CountryCard from "./countriesCard/Card";
import { Provider } from "./utils/Provider";

export default function Home() {
  return (
    <Provider>
      <SearchBar />
      <CountryCard />
    </Provider>
  );
}