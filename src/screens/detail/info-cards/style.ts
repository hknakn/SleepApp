import { ScreenHeight, ScreenWidth } from "@freakycoder/react-native-helpers";
import { StyleSheet, ViewStyle } from "react-native";

type Style = {
  flatlistContentContainer: ViewStyle;
  infoCard: ViewStyle;
};

export default () => {
  return StyleSheet.create<Style>({
    flatlistContentContainer: {
      width: "100%",
      alignItems: "center",
    },
    infoCard: {
      margin: 6,
      width: ScreenWidth / 2 - 16,
      height: ScreenHeight / 8,
    },
  });
};
