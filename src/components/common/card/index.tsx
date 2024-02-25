import React, { useMemo } from "react";
import {
  View,
  useColorScheme,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import createStyles from "./style";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { useTheme } from "@react-navigation/native";
import { Text } from "elements";
import { MockData } from "@screens/home/mock/MockData";
import CircularProgress from "react-native-circular-progress-indicator";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

type CardItemProps = {
  style?: CustomStyleProp;
  data: MockData;
  onPress: () => void;
};

export const CardItem = ({ style, data, onPress }: CardItemProps) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {
    fullName,
    sleepData: { intervals },
  } = data;
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  // Calculate average sleep score
  const averageSleepScore =
    intervals.reduce((acc, session) => acc + session.score, 0) /
    intervals.length;

  // Calculate average sleep time
  const averageSleepTime = useMemo(() => {
    const totalDuration = intervals.reduce((acc, session) => {
      return (
        acc + session.stages.reduce((acc, stage) => acc + stage.duration, 0)
      );
    }, 0);

    const averageDuration = totalDuration / intervals.length;
    const hours = Math.floor(averageDuration / 3600);
    const minutes = Math.floor((averageDuration % 3600) / 60);
    return `${hours}h ${minutes}m`;
  }, [intervals]);

  // Calculate the latest sleep duration
  const latestSleepDuration = useMemo(() => {
    const latestSleepDuration = intervals[0].stages.reduce(
      (acc, stage) => acc + stage.duration,
      0,
    );

    // Convert the duration to a readable format
    const hours = Math.floor(latestSleepDuration / 3600);
    const minutes = Math.floor((latestSleepDuration % 3600) / 60);
    return `${hours}h ${minutes}m`;
  }, [intervals]);

  return (
    <RNBounceable style={[styles.container, style]} onPress={onPress}>
      <View style={styles.contentContainer}>
        <Text style={styles.title} bold color={"#0073DD"}>
          {fullName}
        </Text>

        <Text style={styles.descriptionBold} color={colors.text}>
          <Text bold style={styles.description} color={colors.text}>
            {"Average: "}
          </Text>
          <Text color={colors.text}>{averageSleepTime}</Text>
        </Text>

        <Text style={styles.descriptionBold} color={colors.text}>
          <Text bold style={styles.description} color={colors.text}>
            {"Latest: "}
          </Text>
          <Text color={colors.text}>{latestSleepDuration}</Text>
        </Text>
      </View>

      <CircularProgress
        value={averageSleepScore}
        radius={45}
        inActiveStrokeColor={isDarkMode ? "#143F99" : "#0073DD"}
        activeStrokeColor={isDarkMode ? "#0073DD" : "#143F99"}
        progressValueColor={colors.text}
        progressFormatter={(value: number) => {
          "worklet";
          return `${Math.round(value)}%`;
        }}
      />
    </RNBounceable>
  );
};
