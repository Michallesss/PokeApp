import Search from '@/components/Search';

export default function Page({ params }: { params: { search: string } }) {
  return (
    <Search search={params.search} />
  );
}