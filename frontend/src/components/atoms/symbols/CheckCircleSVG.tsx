import * as React from 'react';

const CheckCircleSVG = (): JSX.Element => (
  <svg
    id="check-circle"
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.28-2.53a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06L11 12.94l3.47-3.47a.75.75 0 0 1 1.06 0Z"
      fill="#000"
    />
  </svg>
);

export default CheckCircleSVG;
