import React, { useMemo } from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";
import createStyles from "./style";
import { SleepSession } from "data/type";
import CircularProgress from "react-native-circular-progress-indicator";
import { Text } from "elements";
import moment from "moment";

type DaySleepScoreProps = {
  style?: ViewStyle;
  item: SleepSession;
  isSelected: boolean;
  onDatePress: (item: SleepSession) => void;
};

const DaySleepScore = ({
  style,
  isSelected,
  item,
  onDatePress,
}: DaySleepScoreProps) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(), []);

  const progressFormatter = (value: number) => {
    "worklet";
    return `${Math.round(value)}%`;
  };

  return (
    <TouchableOpacity
      style={[{ opacity: isSelected ? 1 : 0.5 }, styles.dateContainer, style]}
      onPress={() => onDatePress(item)}
    >
      <CircularProgress
        value={item.score || 0}
        radius={30}
        inActiveStrokeColor={colors.inActiveStrokeColor}
        activeStrokeColor={colors.activeStrokeColor}
        progressValueColor={colors.text}
        progressFormatter={progressFormatter}
      />
      <View style={styles.dateTextContainer}>
        <Text color={colors.text}>{moment(item.ts).format("MMM D")}</Text>
      </View>
    </TouchableOpacity>
  );
};

export { DaySleepScore };
