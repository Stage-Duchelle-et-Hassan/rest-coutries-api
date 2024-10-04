"use client"
import { Search } from "lucide-react";
import { AppContainer } from '@/app/components/container';

interface CountrySearchProps {
  searchTerm: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CountrySearch({ searchTerm, handleInputChange }: CountrySearchProps) {
  return (
    <div className="lg:w-full max-w-5xl mx-auto lg:max-w-full">
      <section className="py-12">
        <AppContainer>
          <div className="relative p-3">
            <Search className="absolute left-5 top-[50%] translate-y-[-50%] h-5 w-5 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search for a country..."
              className="bg-primary-foreground py-3 px-4 rounded-md pl-12 border-input min-w-72"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>
        </AppContainer>
      </section>
    </div>
  );
}
