import Image from "next/image"
import { AppContainer } from "../globale/container"

interface CountryCardProps {
  flag: string,
  alt: string,
  name: string,
  population: number,
  region: string,
  capital: string,
}
export default function CountryCard(props: CountryCardProps) {

  return (
    <section>
      <AppContainer>
        <div className="w-80  h-custom-height shadow-lg rounded-xl cursor-pointer bg-primary-foreground">
          <div className="relative h-40 w-full shadow-md">
            <Image
              src={props.flag}
              alt={props.alt}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 rounded-t-xl"
            />
          </div>
          <div className=" w-full h-1/4 px-8">
            <h1 className="my-4 font-bold text-lg">{props.name}</h1>
            <p>Population : <span>{props.population}</span></p>
            <p>Region: <span>{props.region}</span></p>
            <p>Capital : <span>{props.capital}</span></p>
          </div>
        </div>
      </AppContainer>
    </section>
  )
}

