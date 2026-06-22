import { LightColors } from "@/lib/colors";
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

type Props = {
  size?: number
} & SvgProps;

/**
 * Icône Plus
 */
export const Plus = ({size = 20, color = LightColors.icon, ...props}: Props) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 34 34"
    color={color}
    {...props}
  >
    <Path
      fill="currentColor"
      stroke="currentColor"
      d="M32.791 18.711a2.42 2.42 0 0 0-1.711-4.131H19.42V2.92a2.42 2.42 0 0 0-4.84 0v11.66H2.92a2.42 2.42 0 0 0 0 4.84h11.66v11.66a2.42 2.42 0 0 0 4.84 0V19.42h11.66a2.42 2.42 0 0 0 1.711-.709Z"
    />
  </Svg>
);