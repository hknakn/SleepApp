import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type Style = {
  container: ViewStyle;
  title: TextStyle;
  chartContainer: ViewStyle;
};

export default () => {
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
