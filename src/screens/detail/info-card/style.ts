import { StyleSheet, ViewStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

type Style = {
  container: ViewStyle;
  textContainer: ViewStyle;
};

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      padding: 16,
      borderRadius: 10,
      backgroundColor: colors.foreground,
      justifyContent: "center",
    },
    textContainer: {
      marginBottom: 8,
    },
  });
};
