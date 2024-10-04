import CountriesInfo from "./components/countriesCard/fetchCountriesData";
import { Provider } from "./utils/Provider";

export default function Home() {
  return (
    <>
      <Provider>
        <CountriesInfo />
      </Provider>
    </>
  );
}