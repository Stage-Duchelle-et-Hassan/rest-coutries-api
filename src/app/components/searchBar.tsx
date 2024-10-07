"use client";
import { AppContainer } from "./container";
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
          <div className="">
            <input
              type="search"
              placeholder="Search for a country..."
              className="bg-primary-foreground"
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