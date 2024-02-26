import React, { useMemo } from "react";
import { View } from "react-native";
import createStyles from "./style";
import { useTheme } from "@react-navigation/native";
import { CartesianChart, Line, Scatter } from "victory-native";
import { useFont } from "@shopify/react-native-skia";
import MontserratRegular from "../../../assets/fonts/Montserrat/Montserrat-Regular.ttf";
import moment from "moment";
import { SleepSession } from "@screens/home/mock/type";

type RespiratoryRateChartProps = {
  interval: SleepSession;
};

export const RespiratoryRateChart = ({
  interval,
}: RespiratoryRateChartProps) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(), []);
  const font = useFont(MontserratRegular, 12);

  // Preparing data for the chart for respiratory rate
  const data = interval.timeseries.respiratoryRate.map(([x, y]) => {
    return {
      time: moment.utc(x, "YYYY-MM-DDTHH:mm:ss Z").format("Ha"),
      respiratoryRate: y,
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <CartesianChart
          data={data}
          xKey="time"
          yKeys={["respiratoryRate"]}
          axisOptions={{
            font,
            labelColor: colors.text,
            lineColor: colors.text,
          }}
          domain={{ y: [10, 18] }}
        >
          {({ points }) => (
            <>
              <Line
                points={points.respiratoryRate}
                color={colors.blue}
                strokeWidth={2}
                curveType="natural"
              />
              <Scatter
                points={points.respiratoryRate}
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
