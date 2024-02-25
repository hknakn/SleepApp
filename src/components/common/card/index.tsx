import React, { useMemo } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import createStyles from "./style";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { useTheme } from "@react-navigation/native";
import { Text } from "elements";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

type CardItemProps = {
  style?: CustomStyleProp;
  data: {
    name: string;
    description?: string;
  };
  onPress: () => void;
};

export const CardItem = ({ style, data, onPress }: CardItemProps) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { name, description } = data;

  return (
    <RNBounceable style={[styles.container, style]} onPress={onPress}>
      <Text h4 bold color={colors.text}>
        {name}
      </Text>
      {description && (
        <Text h5 color={colors.placeholder} style={styles.descriptionTextStyle}>
          {description}
        </Text>
      )}
    </RNBounceable>
  );
};
