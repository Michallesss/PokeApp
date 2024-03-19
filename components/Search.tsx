import usePokemon from '@/functions/usePokemon';
import Card from '@/components/Card';
import Error from '@/components/Error';

type Isearch = string | number | null;

export default async function List({ search = null }: { search: Isearch }) {
  const [pokemon, error] = await usePokemon(search);

  if (error) return <Error message={error.message} />;
  else return <Card pokemon={pokemon} />;
}