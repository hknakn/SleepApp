import type { TextStyle, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import type { ExtendedTheme } from "@react-navigation/native";

type Style = {
  container: ViewStyle;
  descriptionTextStyle: TextStyle;
  contentContainer: ViewStyle;
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
    },
    descriptionTextStyle: {
      marginTop: 8,
    },
    contentContainer: {
      marginTop: 16,
      flexDirection: "row",
      alignItems: "center",
    },
  });
};
