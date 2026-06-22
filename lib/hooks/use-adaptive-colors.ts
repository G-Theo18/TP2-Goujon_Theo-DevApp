import { DarkColors, LightColors } from "@/lib/colors"
import { useMemo } from "react"
import { useColorScheme } from "react-native"

/**
 * Permet de récupérer l'instance de DarkColors ou LightColors
 * en fonction du thème (light/dark) de l'appareil
 * 
 * @returns 
 */
export function useAdaptiveColors() {
  const colorScheme = useColorScheme()
  return useMemo(
    () => (colorScheme === 'dark' ? DarkColors : LightColors),
    [colorScheme]
  )
}