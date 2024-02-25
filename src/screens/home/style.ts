import { StyleSheet, ViewStyle } from "react-native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { ExtendedTheme } from "@react-navigation/native";

type Style = {
  container: ViewStyle;
  header: ViewStyle;
  profileImageContainer: ViewStyle;
  listContainer: ViewStyle;
};

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: colors.background,
    },
    header: {
      width: ScreenWidth * 0.9,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    profileImageContainer: {
      justifyContent: "center",
      alignItems: "center",
      height: 40,
      width: 40,
      borderRadius: 20,
      backgroundColor: colors.blue,
    },
    listContainer: {
      marginTop: 8,
    },
  });
};
