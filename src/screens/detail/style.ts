import { StyleSheet, ViewStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

type Style = {
  container: ViewStyle;
  header: ViewStyle;
  flatlist: ViewStyle;
  dateContainer: ViewStyle;
  dateTextContainer: ViewStyle;
  flatlistContentContainer: ViewStyle;
  scrollviewContentContainer: ViewStyle;
  separator: ViewStyle;
  cardsContainer: ViewStyle;
  infoCard: ViewStyle;
  chartSeparator: ViewStyle;
};

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
    },
    header: {
      width: "100%",
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingBottom: 12,
      borderBottomColor: colors.foreground,
      borderBottomWidth: 2,
    },
    flatlist: {
      marginVertical: 16,
      flexGrow: 0,
    },
    flatlistContentContainer: {
      height: 100,
      paddingHorizontal: 16,
    },
    dateContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    dateTextContainer: {
      marginTop: 8,
    },
    scrollviewContentContainer: {
      paddingBottom: 32,
    },
    separator: {
      width: 24,
    },
    cardsContainer: {
      paddingHorizontal: 16,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    infoCard: {
      marginBottom: 16,
      width: "48%",
    },
    chartSeparator: {
      marginHorizontal: 16,
      backgroundColor: colors.foreground,
      height: 1,
    },
  });
};
