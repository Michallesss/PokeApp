'use client';
import { useRouter } from 'next/navigation'
import { useState } from 'react';

export default function NavBar() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  return (
    <nav>
      <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} value={search} className="h-full w-5/6" />
      <button onClick={() => router.push(`/${search}`)} className="h-full w-1/6">Search</button>
    </nav>
  );
}