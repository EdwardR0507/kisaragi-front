import { SVGProps } from 'react';

const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m18.677 19.607-5.715-5.716a6 6 0 0 1-7.719-9.133 6 6 0 0 1 9.134 7.718l5.715 5.716-1.414 1.414-.001.001ZM9.485 5a4 4 0 1 0 2.917 1.264l.605.6-.682-.68-.012-.012A3.972 3.972 0 0 0 9.485 5Z"
      fill={props.fill}
    />
  </svg>
);

export default Search;