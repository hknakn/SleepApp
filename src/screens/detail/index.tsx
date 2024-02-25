/**
 * ? Local Imports
 */
import React, { useMemo } from "react";
import { View } from "react-native";
import * as NavigationService from "react-navigation-helpers";
import createStyles from "./style";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { useTheme } from "@react-navigation/native";
import { Text } from "elements";

interface DetailScreenProps {}

export const DetailScreen = ({}: DetailScreenProps) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        Detail Screen
      </Text>
      <RNBounceable
        style={styles.buttonStyle}
        onPress={() => NavigationService.goBack()}
      >
        <Text color={colors.white}>Go back to Home</Text>
      </RNBounceable>
    </View>
  );
};
