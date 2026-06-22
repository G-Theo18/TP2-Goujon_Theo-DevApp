import { Theme, DarkTheme, DefaultTheme } from '@react-navigation/native'

type Colors = Record<keyof typeof LightColors, string>;

/**
 * Les couleurs pour le thème light
 */
export const LightColors = {
  text: '#323236',
  secondaryText: '#888',
  inputBackground: '#e3e3e4',
  background: '#f2f2f2',
  card: '#fff',
  icon: '#8e8e93',
  blue: '#3478f6',
  checkboxFill: '#333',
  checkboxBorder: '#aaa',
  checkboxCheckIcon: '#fff',
  danger: '#ff6347',
  placeholderText: '#7e7f81',
} as const

/**
 * Les couleurs pour le thème dark
 */
export const DarkColors: Colors = {
  ...LightColors,
  background: '#1c1c1e',
  card: '#3333',
  text: '#eee',
  placeholderText: '#7d7d82',
  checkboxFill: '#fff',
  checkboxBorder: '#fff',
  checkboxCheckIcon: '#2c2c2e',
  inputBackground: '#323236',
  danger: '#ff6347',
} as const;

/**
 * Le thème light de l'application (utilisé surtout pour définir le fond des écrans)
 */
export const AppLightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: LightColors.background,
  },
}

/**
 * Le thème dark de l'application (utilisé surtout pour définir le fond des écrans)
 */
export const AppDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: DarkColors.background,
  },
}
