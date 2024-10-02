"use client"
import clsx from "clsx";
import { AppContainer } from "./container";
import { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header
      className={clsx(
        "py-3 px-3 lg:py-2",
        "transition-all duration-300",
        "shadow-lg",
        isDarkMode ? "bg-[hsl(207,26%,17%)] text-neutral-50" : "bg-neutral-50"
      )}
    >
      <AppContainer>
        <div className="flex justify-between items-center  text-[1rem]">
          <h3 className={clsx("font-bold lg:text-[2rem]", isDarkMode ? 'white' : 'text-[rgb(57,60,61)]')}>Where in the world?</h3>
          <button
            className="flex gap-2 items-center lg:text-[1.5rem]"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={isDarkMode ? 'white' : 'white'}
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-moon"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
            <p>Dark Mode</p>
          </button>
        </div>
      </AppContainer>
    </header>
  );
};

export default Header;