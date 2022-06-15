import * as React from "react";
import { SVGProps } from "react";

const SvgQuestion = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 12" fill="#fff" {...props}>
    <path d="M3.07 7.797v-.578c0-.5.106-.935.32-1.305.213-.37.604-.763 1.172-1.18.546-.39.906-.708 1.078-.953.177-.245.265-.518.265-.82 0-.339-.125-.596-.375-.773-.25-.178-.599-.266-1.047-.266-.78 0-1.671.255-2.671.766L.96.976A7.443 7.443 0 0 1 4.655 0C5.728 0 6.58.258 7.21.773c.635.516.953 1.204.953 2.063 0 .573-.13 1.068-.39 1.484-.26.417-.756.886-1.485 1.407-.5.37-.818.65-.953.843-.13.193-.195.446-.195.758v.469H3.07Zm-.25 2.672c0-.438.117-.768.35-.992.235-.224.576-.336 1.024-.336.433 0 .766.114 1 .343.24.23.36.558.36.985 0 .411-.12.737-.36.976-.24.235-.573.352-1 .352-.437 0-.776-.115-1.015-.344-.24-.234-.36-.562-.36-.984Z" />
  </svg>
);

export default SvgQuestion;