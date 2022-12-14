import { SVGProps } from 'react';

const Visibility = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 19c-1.64.02-3.263-.334-4.746-1.035a10.075 10.075 0 0 1-3.041-2.282A10.589 10.589 0 0 1 2.1 12.316L2 12l.105-.316a10.66 10.66 0 0 1 2.109-3.367 10.074 10.074 0 0 1 3.04-2.282A10.785 10.785 0 0 1 12 5c1.64-.02 3.263.334 4.746 1.035 1.15.56 2.181 1.335 3.041 2.282a10.5 10.5 0 0 1 2.113 3.367L22 12l-.105.316A10.423 10.423 0 0 1 12 19Zm0-12a8.308 8.308 0 0 0-7.883 5A8.307 8.307 0 0 0 12 17a8.309 8.309 0 0 0 7.883-5A8.3 8.3 0 0 0 12 7Zm0 8a3.02 3.02 0 1 1 2.115-.884A2.976 2.976 0 0 1 12 15Z"
      fill={props.fill}
    />
  </svg>
);

export default Visibility;
