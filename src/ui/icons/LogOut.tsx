import { SVGProps } from 'react';

const LogOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 21h-9a2 2 0 0 1-2-2v-4h2v4h9V5h-9v4H8V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2Zm-7-5v-3H3v-2h9V8l5 4-5 4Z"
      fill={props.fill}
    />
  </svg>
);

export default LogOut;
