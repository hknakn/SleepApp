import { StyleSheet, ViewStyle } from "react-native";

type Style = {
  container: ViewStyle;
  chartContainer: ViewStyle;
};

export default () => {
  return StyleSheet.create<Style>({
    container: {
      paddingHorizontal: 16,
      marginBottom: 32,
    },
    chartContainer: {
      width: "100%",
      height: 300,
    },
  });
};
