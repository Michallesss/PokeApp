import Link from "next/link";
import Image from "next/image";
import usePokemon from "@/functions/usePokemon";
import Error from "@/components/Error";

export default async function List() {
  const [pokemons, error] = await usePokemon();

  if (error) return <Error message={error.message} />;

  return (
      <ul className="grid grid-cols-10 gap-4">
        {pokemons.map((pokemon: any, index: number) => 
          <Link key={index} href={`/${pokemon.name}`} className="hover:underline">
            <li className="list-none">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt={"[Poke image]"}
                width={100}
                height={100}
              />
              {pokemon.name}
            </li>
          </Link>
        )}
      </ul>
  );
}