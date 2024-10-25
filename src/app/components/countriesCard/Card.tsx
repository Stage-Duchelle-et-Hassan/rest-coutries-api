import { AppContainer } from "../container"

interface CountryCardProps {
  flag: string,
  alt: string,
  name: string,
  population: string,
  region: string,
  capital: string,
}
export default function CountryCard(props: CountryCardProps) {

  return (
    <section>
      <AppContainer>
        <div className="w-80 shadow-lg rounded-xl bg-primary-foreground cursor-pointer">
          <div
            className="relative h-52 w-full shadow-md mt-3 bg-cover bg-center rounded-t-xl"
            style={{ backgroundImage: `url(${props.flag})` }}
          >
          </div>
          <div className="px-8 py-4 bg-primary-foreground text-primary">
            <h1 className="my-4">{props.name}</h1>
            <p>Population: <span>{props.population}</span></p>
            <p>Region: <span>{props.region}</span></p>
            <p>Capital: <span>{props.capital}</span></p>
          </div>
        </div>
      </AppContainer>
    </section>
  )
}

