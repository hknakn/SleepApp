import React, { useMemo } from "react";
import { View } from "react-native";
import createStyles from "./style";
import { useTheme } from "@react-navigation/native";
import { CartesianChart, Line, Scatter } from "victory-native";
import { useFont } from "@shopify/react-native-skia";
import MontserratRegular from "../../../assets/fonts/Montserrat/Montserrat-Regular.ttf";
import moment from "moment";
import { SleepSession } from "@screens/home/mock/type";
import { Text } from "elements";

type HeartRateChartProps = {
  interval: SleepSession;
};

export const HeartRateChart = ({ interval }: HeartRateChartProps) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const font = useFont(MontserratRegular, 12);

  // Creating data for the chart for heart rate
  const data = interval.timeseries.heartRate.map(([x, y]) => {
    return {
      time: moment.utc(x, "YYYY-MM-DDTHH:mm:ss Z").format("Ha"),
      heartRate: y,
    };
  });

  return (
    <View style={styles.container}>
      <Text h3 bold color={colors.text} style={styles.title}>
        Heart Rate
      </Text>

      <View style={styles.chartContainer}>
        <CartesianChart
          data={data}
          xKey="time"
          yKeys={["heartRate"]}
          axisOptions={{
            font,
            labelColor: colors.text,
            lineColor: colors.text,
          }}
          domain={{ y: [40, 100] }}
        >
          {({ points }) => (
            <>
              <Line
                points={points.heartRate}
                color={colors.red}
                strokeWidth={2}
                curveType="natural"
              />
              <Scatter
                points={points.heartRate}
                shape="circle"
                radius={4}
                style="fill"
                color={colors.red}
              />
            </>
          )}
        </CartesianChart>
      </View>
    </View>
  );
};
