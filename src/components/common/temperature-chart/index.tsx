import React, { useMemo } from "react";
import { View } from "react-native";
import createStyles from "./style";
import { useTheme } from "@react-navigation/native";
import { CartesianChart, Line, Scatter } from "victory-native";
import { useFont } from "@shopify/react-native-skia";
import MontserratRegular from "../../../assets/fonts/Montserrat/Montserrat-Regular.ttf";
import moment from "moment";
import { SleepSession } from "data/type";
import { Text } from "elements";
import { translations } from "shared/localization";

type TemperatureChartProps = {
  interval: SleepSession;
};

export const TemperatureChart = ({ interval }: TemperatureChartProps) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const font = useFont(MontserratRegular, 12);

  // Preparing data for the chart with tempBedC and tempRoomC together
  const data = interval.timeseries.tempBedC.map(([x, y]) => {
    return {
      time: moment.utc(x, "YYYY-MM-DDTHH:mm:ss Z").format("Ha"),
      tempBedC: y,
      timeRoomC: interval.timeseries.tempRoomC.find(
        ([time]) => time === x,
      )?.[1],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.legendContainer}>
        <View style={styles.redDot} />
        <Text style={styles.legendText}>{translations.bed}</Text>
        <View style={styles.blueDot} />
        <Text style={styles.legendText}>{translations.room}</Text>
      </View>

      <View style={styles.chartContainer}>
        <CartesianChart
          data={data}
          xKey="time"
          yKeys={["tempBedC", "timeRoomC"]}
          axisOptions={{
            font,
            labelColor: colors.text,
            lineColor: colors.text,
          }}
          domain={{ y: [0, 50] }}
        >
          {({ points }) => (
            <>
              <Line
                points={points.tempBedC}
                color={colors.red}
                strokeWidth={2}
                curveType="natural"
              />
              <Line
                points={points.timeRoomC}
                color={colors.blue}
                strokeWidth={2}
                curveType="natural"
              />
              <Scatter
                points={points.tempBedC}
                shape="circle"
                radius={4}
                style="fill"
                color={colors.red}
              />
              <Scatter
                points={points.timeRoomC}
                shape="circle"
                radius={4}
                style="fill"
                color={colors.blue}
              />
            </>
          )}
        </CartesianChart>
      </View>
    </View>
  );
};
