import { LightColors } from "@/lib/colors";
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

type Props = {
  size?: number
} & SvgProps;

/**
 * Icône de paramètres
 */
export const Cog = ({size = 20, color = LightColors.icon, ...props}: Props) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 32 32"
    color={color}
    {...props}
  >
    <Path
      fillRule="evenodd"
      fill={"currentColor"}
      stroke={"currentColor"}
      d="M1.06 17.248c.197.93.702 1.803 1.711 3.552l2.458 4.256c1.01 1.75 1.514 2.623 2.22 3.26a6.001 6.001 0 0 0 2.161 1.247c.904.294 1.913.294 3.933.294h4.914c2.02 0 3.03 0 3.933-.294.8-.26 1.536-.685 2.16-1.248.707-.636 1.212-1.51 2.221-3.259L29.23 20.8c1.01-1.748 1.514-2.623 1.712-3.552a6 6 0 0 0 0-2.495c-.198-.93-.703-1.804-1.712-3.553L26.77 6.944c-1.01-1.749-1.514-2.623-2.22-3.26a6 6 0 0 0-2.161-1.247c-.904-.293-1.913-.293-3.933-.293h-4.914c-2.02 0-3.03 0-3.933.293a6 6 0 0 0-2.16 1.248c-.707.636-1.212 1.51-2.221 3.259L2.77 11.2c-1.01 1.749-1.514 2.623-1.712 3.553a6 6 0 0 0 0 2.495ZM16 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      clipRule="evenodd"
    />
  </Svg>
)
