import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

type Style = {
  container: ViewStyle;
  title: TextStyle;
  chartContainer: ViewStyle;
};

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      paddingHorizontal: 16,
      marginVertical: 32,
    },
    title: {
      marginBottom: 16,
    },
    chartContainer: {
      width: "100%",
      height: 300,
    },
  });
};
