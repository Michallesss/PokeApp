// import Image from "next/image";

export default async function Card({ pokemon }: { pokemon: any }) {

  return (
    <div className="max-w-sm overflow-hidden shadow-lg">
      <img className="w-full" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
      <div className="px-6 py-4 border-t-2">
        <div className="font-bold text-xl mb-2">{pokemon.name} #{pokemon.id}</div>
        <p className="text-grey-darker text-base">
          <b>{pokemon.name}</b> is a Pokemon that weights <b>{pokemon.weight}</b> pounds. Its base experience is <b>{pokemon.base_experience}</b> points.
        </p>
      </div>
      <div className="px-6 py-4">
        {/* {
          types.map((type: any) => (<span className="inline-block bg-grey-lighter border border-grey rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{type.name}</span>))
        } */}
        {pokemon.types.map((type: any, index: number) => 
          <span key={index} className="inline-block bg-grey-lighter border border-grey rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{type.type.name}</span>
        )}
      </div>
    </div>
  );
}