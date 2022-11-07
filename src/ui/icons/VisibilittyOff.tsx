import { SVGProps } from 'react';

const VisibilittyOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m19.97 21.385-3.356-3.356c-1.448.66-3.023.991-4.614.973-1.64.02-3.263-.334-4.746-1.035a10.073 10.073 0 0 1-3.041-2.282A10.499 10.499 0 0 1 2.1 12.316l-.1-.314.105-.316a10.786 10.786 0 0 1 3.516-4.651L3 4.414l1.413-1.412 16.969 16.969-1.41 1.414h-.002ZM7.036 8.451a8.574 8.574 0 0 0-2.919 3.551 8.308 8.308 0 0 0 7.883 5 9.308 9.308 0 0 0 3.087-.5l-1.8-1.8c-.4.196-.84.299-1.287.3a3.019 3.019 0 0 1-3-3c0-.447.103-.888.3-1.29L7.036 8.451Zm12.816 7.161-1.392-1.391a8.594 8.594 0 0 0 1.423-2.219 8.3 8.3 0 0 0-7.883-5c-.247 0-.495.009-.735.026L9.5 5.261c.822-.176 1.66-.263 2.5-.259 1.64-.02 3.263.334 4.746 1.035 1.15.56 2.181 1.335 3.041 2.282a10.5 10.5 0 0 1 2.113 3.365l.1.318-.105.316a10.427 10.427 0 0 1-2.042 3.3l-.001-.006Z"
      fill={props.fill}
    />
  </svg>
);

export default VisibilittyOff;
