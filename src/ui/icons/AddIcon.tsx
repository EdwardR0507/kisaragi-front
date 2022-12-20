import { SVGProps } from 'react';

const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm-8-9.828A8 8 0 1 0 4 12v.172ZM13 17h-2v-4H7v-2h4V7h2v4h4v2h-4v4Z"
      fill={props.fill}
    />
  </svg>
);

export default AddIcon;
