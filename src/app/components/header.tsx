"use client"
import clsx from "clsx";
import { AppContainer } from "./container";
import { FC } from "react";
import { useTheme } from "next-themes";



type HeaderProps = {
  isDarkMode?: boolean;
}

const Header:FC<HeaderProps> = ({isDarkMode}) => {
  const { theme, setTheme } = useTheme()

  return (
    <header
      className={clsx(
        "py-3 px-3 lg:py-2",
        "transition-all duration-300",
        "shadow-md", "bg-primary-foreground"
      )}
    >
      <AppContainer>
        <div className="flex justify-between items-center  text-[1rem]">
          <h3 className={clsx("font-bold lg:text-[2rem]")}>Where in the world?</h3>
          <button
            className="flex gap-2 items-center lg:text-[1.5rem]"
            onClick={() => setTheme(() => theme === "dark" ? "light" : "dark")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={isDarkMode ? 'white' : 'white'}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
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