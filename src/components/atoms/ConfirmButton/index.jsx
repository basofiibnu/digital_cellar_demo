import React from 'react';

import './styles.css';
const ConfirmButton = ({
  background = 'black',
  stroke = 'white',
}) => {
  return (
    <div
      className={`text-white rounded-full w-12 h-12 button-container flex items-center justify-center cursor-pointer border border-black`}
      style={{ background: background }}
    >
      <svg
        width="31"
        height="28"
        viewBox="0 0 31 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.857198 13.7372L27.9141 13.7372"
          stroke={stroke}
          strokeWidth="3"
        ></path>
        <path
          d="M15.4561 1.39417L27.9142 13.8522L15.4561 26.3104"
          stroke={stroke}
          strokeWidth="3"
        ></path>
      </svg>
    </div>
  );
};

export default ConfirmButton;
