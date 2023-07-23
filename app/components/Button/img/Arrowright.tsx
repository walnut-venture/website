import { COLORS } from "constants/colors";

type Props = {
  isHovered: boolean;
};

export const Arrowright = ({ isHovered }: Props) => {
  return <svg
    width="33"
    height="25"
    viewBox="0 0 33 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.7398 6.42999L27.8332 12.5L19.7398 18.57M5.1665 12.5H27.6065"
      stroke={isHovered ? COLORS.GREEN : COLORS.GRAY}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"/>
  </svg>;
};
