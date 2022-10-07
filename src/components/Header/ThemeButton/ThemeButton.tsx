import { useContext } from "react";
import { Context } from "@/context/context";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(Context);

  return (
    <button onClick={toggleTheme} style={{ background: "none" }}>
      {theme === "" ? (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.52839 0.717861C7.74339 0.932863 7.80731 1.2564 7.69021 1.53701C7.2458 2.60204 7 3.77143 7 5.00013C7 9.9707 11.0294 14.0001 16 14.0001C17.2287 14.0001 18.3981 13.7543 19.4631 13.3099C19.7437 13.1928 20.0673 13.2567 20.2823 13.4717C20.4973 13.6867 20.5612 14.0103 20.4441 14.2909C18.8618 18.0828 15.1183 20.7501 10.75 20.7501C4.95101 20.7501 0.25 16.0491 0.25 10.2501C0.25 5.88184 2.91735 2.13829 6.70924 0.556033C6.98985 0.438941 7.31338 0.502858 7.52839 0.717861Z"
            fill="#0F172A"
          />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 1V3.25M16.364 3.63604L14.773 5.22703M19 10H16.75M16.364 16.364L14.773 14.773M10 16.75V19M5.22703 14.773L3.63604 16.364M3.25 10H1M5.22703 5.22703L3.63604 3.63604M13.75 10C13.75 12.0711 12.0711 13.75 10 13.75C7.92893 13.75 6.25 12.0711 6.25 10C6.25 7.92893 7.92893 6.25 10 6.25C12.0711 6.25 13.75 7.92893 13.75 10Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeButton;
