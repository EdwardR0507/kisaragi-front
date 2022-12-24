import { SVGProps } from 'react';

const CreditCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2ZM4 12v6h16v-6H4Zm0-6v2h16V6H4Zm9 10H6v-2h7v2Z"
      fill={props.fill}
    />
  </svg>
);

export default CreditCard;
