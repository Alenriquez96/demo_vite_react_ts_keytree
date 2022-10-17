import { useState } from "react";

const scrollButton = () => {
  const [visible, setVisible]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    let btn: HTMLElement | null = document.getElementById("scrollTop");
    if (scrolled > 300) {
      btn!.className = "show";
      setVisible(true);
    } else if (scrolled <= 300) {
      btn?.classList.remove("show");
      setVisible(false);
    }
  };

  const scrollToTop: () => void = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
             in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  if (visible) {
    return (
      <button
        id="scrollTop"
        onClick={scrollToTop}
        style={{ visibility: "visible" }}
      >
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.46967 0.46967C8.76256 0.176777 9.23744 0.176777 9.53033 0.46967L17.0303 7.96967C17.3232 8.26256 17.3232 8.73744 17.0303 9.03033C16.7374 9.32322 16.2626 9.32322 15.9697 9.03033L9.75 2.81066V19C9.75 19.4142 9.41421 19.75 9 19.75C8.58579 19.75 8.25 19.4142 8.25 19V2.81066L2.03033 9.03033C1.73744 9.32322 1.26256 9.32322 0.96967 9.03033C0.676777 8.73744 0.676777 8.26256 0.96967 7.96967L8.46967 0.46967Z"
            fill="white"
          />
        </svg>
      </button>
    );
  } else {
    return (
      <button
        id="scrollTop"
        onClick={scrollToTop}
        style={{ visibility: "hidden" }}
      ></button>
    );
  }
};

export default scrollButton;
