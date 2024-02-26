import { StyleSheet, ViewStyle } from "react-native";

type Style = {
  dateContainer: ViewStyle;
  dateTextContainer: ViewStyle;
};

export default () => {
  return StyleSheet.create<Style>({
    dateContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    dateTextContainer: {
      marginTop: 8,
    },
  });
};
