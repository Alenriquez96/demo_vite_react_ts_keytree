import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import catalogue from "../../../assets/catalogue.svg";
import discounts from "../../../assets/discounts.svg";
import bestsellers from "../../../assets/bestsellers.svg";
import { useState } from "react";
import Filter from "../../Main/Filter/Filter";

const Sidebar = (): JSX.Element => {
  // to change burger classes

  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setMenuClass("menu visible");
    } else {
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div id="burgerContainer">
      <div className="navBar">
        <svg
          className="burgerButton"
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={updateMenu}
        >
          <path
            d="M0.75 0.75H17.25M0.75 6H17.25M0.75 11.25H17.25"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div className={menu_class}>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "120px",
          }}
        >
          <h1
            style={{
              fontFamily: "EB Garamond",
              fontSize: "20px",
              fontWeight: "600",
              lineHeight: "26px",
              color: "#2B3E59",
            }}
          >
            Bookshop
          </h1>
          <svg
            className="burgerButton"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={updateMenu}
          >
            <path
              d="M1 13L13 1M1 1L13 13"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "space-evenly",
              gap: "10px",
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "100%",
              }}
            >
              <img src={catalogue} />
              Catalogue
            </Link>
            <Link
              to="/discounts"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "100%",
              }}
            >
              <img src={discounts} />
              Discounts
            </Link>
            <Link
              to="/bestsellers"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "100%",
              }}
            >
              <img src={bestsellers} />
              Bestsellers
            </Link>
          </div>
          <div>
            <Filter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
