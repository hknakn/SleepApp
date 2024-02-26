import React, { useCallback, useMemo, useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import createStyles from "./style";
import { useRoute, useTheme } from "@react-navigation/native";
import { UserData } from "@screens/home/mock/MockData";
import moment from "moment";
import CircularProgress from "react-native-circular-progress-indicator";
import { Text } from "elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import * as NavigationService from "react-navigation-helpers";
import {
  HeartRateChart,
  RespiratoryRateChart,
  SleepStagesChart,
  TemperatureChart,
} from "components";
import { SleepSession } from "@screens/home/mock/type";
import { InfoCard } from "./info-card";
import {
  calculateAverageBedTemperature,
  calculateAverageHeartRate,
  calculateAverageRespiratoryRate,
  calculateAverageSleepScore,
  calculateAverageTimeToSleep,
  calculateAverageTossAndTurns,
  calculateBedTemperature,
  calculateHeartRate,
  calculateRespiratoryRate,
  calculateTimeToSleep,
  calculateTossAndTurns,
} from "utils";

export const DetailScreen = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const mockData: UserData = useRoute().params?.data;
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";
  // Sorting the sleep data by date. Earlier dates come first
  const orderedIntervals = mockData.sleepData.intervals.sort((a, b) => {
    return moment(a.ts).diff(moment(b.ts));
  });
  console.log("orderedIntervals", orderedIntervals);

  const [selectedInterval, setSelectedInterval] = useState(orderedIntervals[0]);

  const onDatePress = useCallback((interval: SleepSession) => {
    setSelectedInterval(interval);
  }, []);

  const onBackPress = () => {
    // Go back to the previous screen
    NavigationService.goBack();
  };

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity hitSlop={10} onPress={onBackPress}>
          <Icon
            name="chevron-back-outline"
            type={IconType.Ionicons}
            size={24}
            color={colors.text}
          />
        </TouchableOpacity>
        <Text h4 bold color={colors.text}>
          {mockData.fullName}
        </Text>
        <View style={{ width: "6%" }} />
      </View>
    );
  };

  const renderItem = useCallback(
    ({ item }: { item: SleepSession }) => (
      <TouchableOpacity
        style={[
          { opacity: selectedInterval === item ? 1 : 0.5 },
          styles.dateContainer,
        ]}
        onPress={() => onDatePress(item)}
      >
        <CircularProgress
          value={item.score || 0}
          radius={30}
          inActiveStrokeColor={isDarkMode ? "#143F99" : "#0073DD"}
          activeStrokeColor={isDarkMode ? "#0073DD" : "#143F99"}
          progressValueColor={colors.text}
          progressFormatter={(value: number) => {
            "worklet";
            return `${Math.round(value)}%`;
          }}
        />
        <View style={styles.dateTextContainer}>
          <Text color={colors.text}>{moment(item.ts).format("MMM D")}</Text>
        </View>
      </TouchableOpacity>
    ),
    [
      selectedInterval,
      isDarkMode,
      colors.text,
      styles.dateContainer,
      styles.dateTextContainer,
      onDatePress,
    ],
  );

  const ItemSeparatorComponent = () => <View style={styles.separator} />;
  const ChartSeperator = () => <View style={styles.chartSeparator} />;

  return (
    <SafeAreaView style={styles.container}>
      {/* Displaying a circular progress for each day */}
      {renderHeader()}
      <ScrollView contentContainerStyle={styles.scrollviewContentContainer}>
        <FlatList
          style={styles.flatlist}
          contentContainerStyle={styles.flatlistContentContainer}
          data={orderedIntervals}
          horizontal
          ItemSeparatorComponent={ItemSeparatorComponent}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
        <View style={styles.cardsContainer}>
          <InfoCard
            style={styles.infoCard}
            title="Time to fall asleep"
            value={calculateTimeToSleep(selectedInterval.stages)}
            average={calculateAverageTimeToSleep(orderedIntervals)}
          />
          <InfoCard
            style={styles.infoCard}
            title="Sleep score"
            value={`${selectedInterval.score.toString()}%`}
            average={`${calculateAverageSleepScore(orderedIntervals).toString()}%`}
          />
        </View>
        <View style={styles.cardsContainer}>
          <InfoCard
            style={styles.infoCard}
            title="Heart rate"
            value={calculateHeartRate(selectedInterval).toString()}
            average={calculateAverageHeartRate(orderedIntervals).toString()}
          />
          <InfoCard
            style={styles.infoCard}
            title="Respiratory rate"
            value={calculateRespiratoryRate(selectedInterval).toString()}
            average={calculateAverageRespiratoryRate(
              orderedIntervals,
            ).toString()}
          />
        </View>

        <View style={styles.cardsContainer}>
          <InfoCard
            style={styles.infoCard}
            title="Toss and turns"
            value={calculateTossAndTurns(selectedInterval).toString()}
            average={calculateAverageTossAndTurns(orderedIntervals).toString()}
          />
          <InfoCard
            style={styles.infoCard}
            title="Bed temperature"
            value={calculateBedTemperature(selectedInterval).toString()}
            average={calculateAverageBedTemperature(
              orderedIntervals,
            ).toString()}
          />
        </View>

        <TemperatureChart interval={selectedInterval} />
        <ChartSeperator />
        <SleepStagesChart interval={selectedInterval} />
        <ChartSeperator />
        <HeartRateChart interval={selectedInterval} />
        <ChartSeperator />
        <RespiratoryRateChart interval={selectedInterval} />
      </ScrollView>
    </SafeAreaView>
  );
};
