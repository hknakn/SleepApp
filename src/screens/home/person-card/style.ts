import type { TextStyle, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import type { ExtendedTheme } from "@react-navigation/native";

type Style = {
  container: ViewStyle;
  contentContainer: ViewStyle;
  title: TextStyle;
  descriptionBold: TextStyle;
  description: TextStyle;
};

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      padding: 16,
      marginTop: 16,
      borderRadius: 10,
      width: ScreenWidth * 0.9,
      backgroundColor: colors.foreground,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    title: {
      fontSize: 24,
    },
    description: {
      fontSize: 16,
      marginTop: 8,
    },
    descriptionBold: {
      fontSize: 16,
    },
    contentContainer: {
      justifyContent: "space-between",
    },
  });
};
