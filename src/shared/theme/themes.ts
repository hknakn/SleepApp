import type { ExtendedTheme } from "@react-navigation/native";
import { DefaultTheme } from "@react-navigation/native";

export const palette = {
  // Eight Sleep Palette
  white: "#FFFFFF",
  black: "#000000",
  eerieBlack: "#151515",
  gray94: "#F0F0F0",
  deepSkyBlue: "#246AFF",
  cinnabar: "#E54E41",
};

export const LightTheme: ExtendedTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: palette.white,
    text: palette.black,
    foreground: palette.gray94,
    blue: palette.deepSkyBlue,
    red: palette.cinnabar,
  },
};

export const DarkTheme: ExtendedTheme = {
  ...DefaultTheme,
  colors: {
    ...LightTheme.colors,
    background: palette.black,
    text: palette.white,
    foreground: palette.eerieBlack,
    blue: palette.deepSkyBlue,
    red: palette.cinnabar,
  },
};
