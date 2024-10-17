import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Header() {
  const [isShow, setIsShow] = React.useState(false);
  return (
    <>
      <Navbar>
        <button
          className="text-white squre-group md:hidden"
          onClick={() => setIsShow((p) => !p)}
        >
          <svg
            width="25"
            height="18"
            viewBox="0 0 25 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L23.6274 1"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1 9L23.6274 9"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1 17H23.6274"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </Navbar>
      <Sidebar isShow={isShow} onClick={() => setIsShow(false)} />
    </>
  );
}

export default Header;
