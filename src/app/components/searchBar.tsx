"use client";
import { AppContainer } from "./container";
import { Search } from "lucide-react";
import { useState } from 'react';

export default function SearchBar({ onSearch }: { onSearch?: (query: string) => void }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (typeof onSearch === 'function') {
      onSearch(e.target.value);
    }
  };

  return (
    <section className='py-12'>
      <AppContainer>
        <div className=" flex w-full justify-between">
          <div className=" relative">
            <Search className="absolute left-2 top-[50%] translate-y-[-50%] h-5 w-5 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search for a country..."
              className="bg-primary-foreground flex h-9 w-full rounded-lg pl-8 border border-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>
          <div>
          </div>
        </div>
       
      </AppContainer>
    </section>
  );
}