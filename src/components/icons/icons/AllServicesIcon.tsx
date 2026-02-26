import { createIcon } from "../Icon";

const SvgContent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.66667 2H6C6.36794 2 6.66667 2.29872 6.66667 2.66667V6C6.66667 6.36794 6.36794 6.66667 6 6.66667H2.66667C2.29872 6.66667 2 6.36794 2 6V2.66667C2 2.29872 2.29872 2 2.66667 2V2"
      stroke="white"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 2H13.3333C13.7013 2 14 2.29872 14 2.66667V6C14 6.36794 13.7013 6.66667 13.3333 6.66667H10C9.63207 6.66667 9.33334 6.36794 9.33334 6V2.66667C9.33334 2.29872 9.63207 2 10 2V2"
      stroke="white"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 9.33325H13.3333C13.7013 9.33325 14 9.63198 14 9.99992V13.3333C14 13.7012 13.7013 13.9999 13.3333 13.9999H10C9.63207 13.9999 9.33334 13.7012 9.33334 13.3333V9.99992C9.33334 9.63198 9.63207 9.33325 10 9.33325V9.33325"
      stroke="white"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.66667 9.33325H6C6.36794 9.33325 6.66667 9.63198 6.66667 9.99992V13.3333C6.66667 13.7012 6.36794 13.9999 6 13.9999H2.66667C2.29872 13.9999 2 13.7012 2 13.3333V9.99992C2 9.63198 2.29872 9.33325 2.66667 9.33325V9.33325"
      stroke="white"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AllServicesIcon = createIcon(SvgContent, "AllServicesIcon");
export default AllServicesIcon;
