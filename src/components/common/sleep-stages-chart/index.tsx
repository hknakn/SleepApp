import React, { useMemo } from "react";
import { View } from "react-native";
import createStyles from "./style";
import { useTheme } from "@react-navigation/native";
import { Area, CartesianChart, Line } from "victory-native";
import { useFont } from "@shopify/react-native-skia";
import MontserratRegular from "../../../assets/fonts/Montserrat/Montserrat-Regular.ttf";
import moment from "moment";
import { SleepSession } from "@screens/home/mock/type";
import { Text } from "elements";
import { hexToRGBA, numberToSleepStage, sleepStageToNumber } from "utils";
import { SleepStagesChartData } from "./type";

type SleepStagesChartProps = {
  interval: SleepSession;
};

export const SleepStagesChart = ({ interval }: SleepStagesChartProps) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const font = useFont(MontserratRegular, 12);
  const sleepStagesData: SleepStagesChartData[] = [];

  // Creating the data for the chart
  interval.stages.forEach((stage) => {
    const startOfTheStage = moment.utc(interval.ts, "YYYY-MM-DDTHH:mm:ss Z");
    startOfTheStage.add(stage.duration, "seconds");

    sleepStagesData.push({
      time: startOfTheStage.format("HH:mm"),
      stage: sleepStageToNumber(stage.stage),
    });
  });

  return (
    <View style={styles.container}>
      <Text h4 bold color={colors.text}>
        Sleep Stages
      </Text>

      <View style={styles.chartContainer}>
        <CartesianChart
          data={sleepStagesData}
          xKey="time"
          yKeys={["stage"]}
          axisOptions={{
            font,
            labelColor: colors.text,
            lineColor: colors.text,
            formatYLabel: (y) => numberToSleepStage(y as number),
          }}
          domain={{ y: [0, 5] }}
        >
          {({ points, chartBounds }) => (
            <>
              <Line
                points={points.stage}
                color={colors.blue}
                strokeWidth={2}
                curveType="step"
              />
              <Area
                points={points.stage}
                y0={chartBounds.bottom}
                color={hexToRGBA(colors.blue, 0.25)}
                animate={{ type: "timing", duration: 300 }}
                curveType="step"
              />
            </>
          )}
        </CartesianChart>
      </View>
    </View>
  );
};