import React from 'react';

export const LogoIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="32"
      viewBox="0 0 24 24"
      width="32"
      xmlns="http://www.w3.org/2000/svg">
      <path
        clipRule="evenodd"
        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11 7V11H7C7 12.6569 8.34315 14 10 14H14V10C14 8.34315 12.6569 7 11 7ZM12 17C10.3431 17 9 15.6569 9 14H13C13 15.6569 11.6569 17 10 17H12Z"
        fill="#000"
        fillRule="evenodd"
      />
    </svg>
  );
};
