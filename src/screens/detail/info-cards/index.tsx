import React, { useMemo } from "react";
import { FlatList } from "react-native";
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
import createStyles from "./style";
import { SleepSession } from "@screens/home/mock/type";
import { InfoCard } from "../info-card";

type InfoCardsProps = {
  orderedIntervals: SleepSession[];
  selectedInterval: SleepSession;
};

const InfoCards = ({ selectedInterval, orderedIntervals }: InfoCardsProps) => {
  const styles = useMemo(() => createStyles(), []);

  // Creating data to render the info cards
  const data = [
    {
      title: "Time to fall asleep",
      value: calculateTimeToSleep(selectedInterval.stages),
      average: calculateAverageTimeToSleep(orderedIntervals),
    },
    {
      title: "Sleep score",
      value: `${selectedInterval.score.toString()}%`,
      average: `${calculateAverageSleepScore(orderedIntervals).toString()}%`,
    },
    {
      title: "Heart rate",
      value: calculateHeartRate(selectedInterval).toString(),
      average: calculateAverageHeartRate(orderedIntervals).toString(),
    },
    {
      title: "Respiratory rate",
      value: calculateRespiratoryRate(selectedInterval).toString(),
      average: calculateAverageRespiratoryRate(orderedIntervals).toString(),
    },
    {
      title: "Toss and turns",
      value: calculateTossAndTurns(selectedInterval).toString(),
      average: calculateAverageTossAndTurns(orderedIntervals).toString(),
    },
    {
      title: "Bed temperature",
      value: calculateBedTemperature(selectedInterval).toString(),
      average: calculateAverageBedTemperature(orderedIntervals).toString(),
    },
  ];

  const renderItem = ({ item }: { item: (typeof data)[0] }) => (
    <InfoCard
      style={styles.infoCard}
      title={item.title}
      value={item.value}
      average={item.average}
    />
  );

  return (
    <>
      <FlatList
        contentContainerStyle={styles.flatlistContentContainer}
        data={data}
        keyExtractor={(item) => item.title}
        numColumns={2}
        renderItem={renderItem}
      />
    </>
  );
};

export { InfoCards };
