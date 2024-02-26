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
  bridgeport: "#004584",
  water: "#CCE3F8",
  celticBlue: "#0073DD",
  dora: "#328FE3",
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
    inActiveStrokeColor: palette.water,
    activeStrokeColor: palette.dora,
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
    inActiveStrokeColor: palette.bridgeport,
    activeStrokeColor: palette.celticBlue,
  },
};
