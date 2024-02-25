import React, { useCallback, useMemo, useState } from "react";
import {
  Pressable,
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
import { SleepStagesChart, TemperatureChart } from "components";

export const DetailScreen = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const mockData: UserData = useRoute().params?.data;
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";
  // Sorting the sleep data by date. Earlier dates come first
  const dates = mockData.sleepData.intervals
    .map((interval) => moment(interval.ts).format("MMM D"))
    .reverse();

  const [selectedDate, setSelectedDate] = useState(dates[0]);

  const onDatePress = useCallback((date: string) => {
    setSelectedDate(date);
  }, []);

  const onBackPress = () => {
    // Go back to the previous screen
    NavigationService.goBack();
  };

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Pressable hitSlop={10} onPress={onBackPress}>
          <Icon
            name="chevron-back-outline"
            type={IconType.Ionicons}
            size={24}
            color={colors.text}
          />
        </Pressable>
        <Text h4 bold color={colors.text}>
          {mockData.fullName}
        </Text>
        <View style={{ width: "6%" }} />
      </View>
    );
  };

  const renderItem = useCallback(
    ({ item }: { item: string }) => (
      <TouchableOpacity
        style={[
          { opacity: selectedDate === item ? 1 : 0.5 },
          styles.dateContainer,
        ]}
        onPress={() => onDatePress(item)}
      >
        <CircularProgress
          value={
            mockData.sleepData.intervals.find(
              (interval) => moment(interval.ts).format("MMM D") === item,
            )?.score || 0
          }
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
          <Text color={colors.text}>{item}</Text>
        </View>
      </TouchableOpacity>
    ),
    [
      selectedDate,
      mockData.sleepData.intervals,
      isDarkMode,
      colors.text,
      styles.dateContainer,
      styles.dateTextContainer,
      onDatePress,
    ],
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Displaying a circular progress for each day */}
      {renderHeader()}
      <ScrollView contentContainerStyle={styles.scrollviewContentContainer}>
        <FlatList
          style={styles.flatlist}
          contentContainerStyle={styles.flatlistContentContainer}
          data={dates}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 24 }} />}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />

        <TemperatureChart
          interval={mockData.sleepData.intervals.find(
            (interval) => moment(interval.ts).format("MMM D") === selectedDate,
          )}
        />

        <SleepStagesChart
          interval={mockData.sleepData.intervals.find(
            (interval) => moment(interval.ts).format("MMM D") === selectedDate,
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
