import * as React from "react";
import { SVGProps } from "react";

const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" fill="none" stroke="#2ecc71" {...props}>
    <path d="m2 7 4.213 7 6.62-12" strokeWidth={2} strokeLinecap="square" strokeLinejoin="bevel" />
  </svg>
);

export default SvgCheck;
