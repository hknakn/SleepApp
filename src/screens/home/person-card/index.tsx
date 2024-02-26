import React, { useMemo } from "react";
import { TouchableOpacity, View } from "react-native";
import createStyles from "./style";
import { useTheme } from "@react-navigation/native";
import { Text } from "elements";
import { UserData } from "data";
import CircularProgress from "react-native-circular-progress-indicator";
import {
  calculateAverageSleepScore,
  calculateAverageSleepTime,
  getLatestSleepDuration,
} from "utils";
import { translations } from "shared/localization";

type PersonCardProps = {
  data: UserData;
  onPress: () => void;
};

export const PersonCard = ({ data, onPress }: PersonCardProps) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {
    fullName,
    sleepData: { intervals },
  } = data;

  const progressFormatter = (value: number) => {
    "worklet";
    return `${Math.round(value)}%`;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.contentContainer}>
        <Text style={styles.title} bold color={colors.blue}>
          {fullName}
        </Text>

        <Text style={styles.descriptionBold} color={colors.text}>
          <Text bold style={styles.description} color={colors.text}>
            {translations.average}
          </Text>
          <Text color={colors.text}>
            {calculateAverageSleepTime(intervals)}
          </Text>
        </Text>

        <Text style={styles.descriptionBold} color={colors.text}>
          <Text bold style={styles.description} color={colors.text}>
            {translations.latest}
          </Text>
          <Text color={colors.text}>{getLatestSleepDuration(intervals)}</Text>
        </Text>
      </View>

      <CircularProgress
        value={calculateAverageSleepScore(intervals)}
        radius={45}
        inActiveStrokeColor={colors.inActiveStrokeColor}
        activeStrokeColor={colors.activeStrokeColor}
        progressValueColor={colors.text}
        progressFormatter={progressFormatter}
      />
    </TouchableOpacity>
  );
};
