import { StyleSheet, ViewStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

type Style = {
  container: ViewStyle;
  flatlist: ViewStyle;
  flatlistContentContainer: ViewStyle;
  scrollviewContentContainer: ViewStyle;
  chartSeparator: ViewStyle;
  chartTitleContainer: ViewStyle;
};

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
    },
    flatlist: {
      marginVertical: 16,
      flexGrow: 0,
    },
    flatlistContentContainer: {
      height: 100,
      paddingHorizontal: 16,
    },
    scrollviewContentContainer: {
      paddingBottom: 32,
    },
    chartSeparator: {
      marginHorizontal: 16,
      backgroundColor: colors.foreground,
      height: 1,
    },
    chartTitleContainer: {
      marginVertical: 32,
      paddingHorizontal: 16,
    },
  });
};
