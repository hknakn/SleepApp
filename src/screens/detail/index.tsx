import React, { useCallback, useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import createStyles from "./style";
import { useRoute, useTheme } from "@react-navigation/native";
import { UserData } from "@screens/home/mock/MockData";
import moment from "moment";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import {
  HeartRateChart,
  RespiratoryRateChart,
  SleepStagesChart,
  TemperatureChart,
} from "components";
import { SleepSession } from "@screens/home/mock/type";
import { Header } from "./header";
import { DaySleepScore } from "./day-sleep-score";
import { InfoCards } from "./info-cards";
import { Text } from "elements";

const CHARTS = [
  {
    title: "Temperature",
    component: TemperatureChart,
  },
  {
    title: "Sleep Stages",
    component: SleepStagesChart,
  },
  {
    title: "Heart Rate",
    component: HeartRateChart,
  },
  {
    title: "Respiratory Rate",
    component: RespiratoryRateChart,
  },
];

export const DetailScreen = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const mockData: UserData = useRoute().params?.data;
  // Sorting the sleep data by date. Earlier dates come first
  const orderedIntervals = mockData.sleepData.intervals.sort((a, b) => {
    return moment(a.ts).diff(moment(b.ts));
  });
  const [selectedInterval, setSelectedInterval] = useState(orderedIntervals[0]);

  const onDatePress = useCallback((interval: SleepSession) => {
    setSelectedInterval(interval);
  }, []);

  const renderDaySleepScore = useCallback(
    ({ item }: { item: SleepSession }) => (
      <DaySleepScore
        item={item}
        isSelected={selectedInterval === item}
        onDatePress={onDatePress}
      />
    ),
    [onDatePress, selectedInterval],
  );

  const renderCharts = useCallback(
    ({ item }: { item: (typeof CHARTS)[0] }) => (
      <>
        <View style={styles.chartTitleContainer}>
          <Text h3 bold color={colors.text}>
            {item.title}
          </Text>
        </View>
        <item.component interval={selectedInterval} />
      </>
    ),
    [selectedInterval, colors.text, styles.chartTitleContainer],
  );

  const DaySleepScoreSeparator = () => (
    <View style={styles.daySleepSeparator} />
  );

  const ChartSeparator = () => <View style={styles.chartSeparator} />;

  return (
    <SafeAreaView style={styles.container}>
      <Header fullName={mockData.fullName} />

      <ScrollView contentContainerStyle={styles.scrollviewContentContainer}>
        {/* Rendering Day Sleep Scores */}
        <FlatList
          style={styles.flatlist}
          contentContainerStyle={styles.flatlistContentContainer}
          data={orderedIntervals}
          horizontal
          ItemSeparatorComponent={DaySleepScoreSeparator}
          showsHorizontalScrollIndicator={false}
          renderItem={renderDaySleepScore}
        />

        {/* Rendering Info Cards */}
        <InfoCards
          selectedInterval={selectedInterval}
          orderedIntervals={orderedIntervals}
        />

        {/* Rendering Charts */}
        <FlatList
          data={CHARTS}
          renderItem={renderCharts}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ChartSeparator}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
