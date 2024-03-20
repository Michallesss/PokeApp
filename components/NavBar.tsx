'use client';
import { useRouter } from 'next/navigation'
import { useState } from 'react';
// import '@picocss/pico';

export default function NavBar() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/${search}`);
  }

  return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} value={search} minLength={3} maxLength={12} pattern="[A-Za-z\-]+" required/>
        <button type='submit' className="text-black">Search</button>
      </form>
  );
}