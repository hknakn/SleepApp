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
import { SleepSession } from "data/type";
import { InfoCard } from "../info-card";
import { translations } from "shared/localization";

type InfoCardsProps = {
  orderedIntervals: SleepSession[];
  selectedInterval: SleepSession;
};

const InfoCards = ({ selectedInterval, orderedIntervals }: InfoCardsProps) => {
  const styles = useMemo(() => createStyles(), []);

  // Creating data to render the info cards
  const data = [
    {
      title: translations.timeToFallAsleep,
      value: calculateTimeToSleep(selectedInterval.stages),
      average: calculateAverageTimeToSleep(orderedIntervals),
    },
    {
      title: translations.sleepScore,
      value: `${selectedInterval.score.toString()}%`,
      average: `${calculateAverageSleepScore(orderedIntervals).toString()}%`,
    },
    {
      title: translations.heartRate,
      value: calculateHeartRate(selectedInterval).toString(),
      average: calculateAverageHeartRate(orderedIntervals).toString(),
    },
    {
      title: translations.respiratoryRate,
      value: calculateRespiratoryRate(selectedInterval).toString(),
      average: calculateAverageRespiratoryRate(orderedIntervals).toString(),
    },
    {
      title: translations.tossAndTurns,
      value: calculateTossAndTurns(selectedInterval).toString(),
      average: calculateAverageTossAndTurns(orderedIntervals).toString(),
    },
    {
      title: translations.bedTemperature,
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
