import Nav from "@/components/Header/Nav/Nav";
import ThemeButton from "@/components/Header/ThemeButton/ThemeButton";
import Sidebar from "@/components/Header/Sidebar/Sidebar";
import { useContext } from "react";
import { Context } from "@/context/context";

const Header = (): JSX.Element => {
  const theme = useContext(Context);
  const darkmode: string = "header" + theme.theme;

  return (
    <header className={darkmode}>
      <div id="logo">
        <svg
          width="58"
          height="58"
          viewBox="0 0 58 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="29" cy="29" r="29" fill="#D3BB3D" />
          <path
            d="M29 20.063C26.5274 17.8451 23.3216 16.6204 20 16.625C18.422 16.625 16.907 16.895 15.5 17.393V38.768C16.9454 38.258 18.4672 37.9983 20 38C23.4575 38 26.612 39.3005 29 41.438M29 20.063C31.4725 17.8449 34.6784 16.6203 38 16.625C39.578 16.625 41.093 16.895 42.5 17.393V38.768C41.0546 38.258 39.5328 37.9983 38 38C34.6784 37.9954 31.4726 39.2201 29 41.438M29 20.063V41.438"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {darkmode === "header" ? (
          <h1>Bookshop</h1>
        ) : (
          <h1 style={{ color: "white" }}>Bookshop</h1>
        )}
      </div>
      <Nav />
      <ThemeButton />
      <Sidebar />
    </header>
  );
};

export default Header;
