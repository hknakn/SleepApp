import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Text } from "elements";
import createStyles from "./style";

const Header = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Text h4 bold color="white">
          HA
        </Text>
      </View>
    </View>
  );
};

export { Header };
