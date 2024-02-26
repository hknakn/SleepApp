import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

type Style = {
  container: ViewStyle;
  legendContainer: ViewStyle;
  redDot: ViewStyle;
  blueDot: ViewStyle;
  legendText: TextStyle;
  chartContainer: ViewStyle;
};

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      paddingHorizontal: 16,
      marginBottom: 32,
    },
    legendContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 16,
    },
    redDot: {
      width: 16,
      height: 16,
      borderRadius: 8,
      backgroundColor: colors.red,
    },
    blueDot: {
      width: 16,
      height: 16,
      borderRadius: 8,
      backgroundColor: colors.blue,
      marginLeft: 16,
    },
    legendText: {
      color: colors.text,
      fontSize: 12,
      marginLeft: 8,
    },
    chartContainer: {
      width: "100%",
      height: 300,
    },
  });
};
