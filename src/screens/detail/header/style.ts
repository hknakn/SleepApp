import { StyleSheet, ViewStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

type Style = {
  container: ViewStyle;
  rightSide: ViewStyle;
};

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      width: "100%",
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingBottom: 12,
      borderBottomColor: colors.foreground,
      borderBottomWidth: 2,
    },
    rightSide: {
      width: "6%",
    },
  });
};
