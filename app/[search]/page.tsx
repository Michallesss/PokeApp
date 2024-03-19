import Search from '@/components/Search';

export default function Page({ params }: { params: { search: string | number } }) {
  return (
    <Search search={params.search} />
  );
}