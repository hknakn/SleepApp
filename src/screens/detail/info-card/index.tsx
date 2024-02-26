import React, { useMemo } from "react";
import { View, ViewStyle } from "react-native";
import createStyles from "./style";
import { useTheme } from "@react-navigation/native";
import { Text } from "elements";

type InfoCardProps = {
  style?: ViewStyle;
  title: string;
  value: string;
  average?: string;
};

const InfoCard = ({ title, value, average, style }: InfoCardProps) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={[styles.container, style]}>
      <Text h4 bold color={colors.text} style={styles.textContainer}>
        {title}
      </Text>
      <Text h5 color={colors.text} style={styles.textContainer}>
        {value}
      </Text>
      {average && (
        <Text h5 color={colors.text}>
          <Text h5 color={colors.text} bold>
            {"Average: "}
          </Text>
          {average}
        </Text>
      )}
    </View>
  );
};

export { InfoCard };
