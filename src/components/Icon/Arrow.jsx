import React from "react";

const DIRECTION = {
  up: "",
  right: "rotate-90",
  left: "-rotate-90",
  down: "-rotate-180",
};

function Arrow({ direction = "up" }) {
  return (
    <div
      className={`squre-group transition-all duration-300 ${DIRECTION[direction]}`}
    >
      <svg
        width="15"
        height="9"
        viewBox="0 0 15 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.58781 2.61695L1.74485 8.4602C1.38505 8.81988 0.803084 8.82046 0.444422 8.46179C0.083251 8.10062 0.0864591 7.52093 0.446016 7.16137L6.93677 0.670618C6.93699 0.670276 6.93733 0.670048 6.93756 0.66982C6.9379 0.669479 6.93813 0.669251 6.93836 0.668909C7.11872 0.488668 7.35352 0.399116 7.58811 0.399457C7.82338 0.400369 8.05807 0.489922 8.23718 0.668909C8.23741 0.669251 8.23775 0.669479 8.23798 0.66982C8.23832 0.670048 8.23855 0.670276 8.23878 0.670618L14.7298 7.16137C15.0895 7.52105 15.0901 8.10313 14.7314 8.46179C14.3702 8.82296 13.7904 8.81975 13.431 8.4602L7.58781 2.61695Z"
          fill="#222222"
        />
      </svg>
    </div>
  );
}

export default Arrow;
