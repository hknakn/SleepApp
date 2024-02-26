import { StyleSheet, ViewStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";

type Style = {
  container: ViewStyle;
  profileImageContainer: ViewStyle;
};

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      width: ScreenWidth * 0.9,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16,
    },
    profileImageContainer: {
      justifyContent: "center",
      alignItems: "center",
      height: 40,
      width: 40,
      borderRadius: 20,
      backgroundColor: colors.blue,
    },
  });
};
