import React, { useCallback, useMemo } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationService from "react-navigation-helpers";
import createStyles from "./style";
import { useTheme } from "@react-navigation/native";
import { SCREENS } from "@shared-constants";
import { CardItem } from "components";
import { Text } from "elements";
import { MockData, UserData } from "./mock/MockData";

export const HomeScreen = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const handleItemPress = useCallback((item: UserData) => {
    NavigationService.push(SCREENS.DETAIL, { data: item });
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: UserData }) => (
      <CardItem data={item} onPress={() => handleItemPress(item)} />
    ),
    [handleItemPress],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Text h4 bold color={colors.text}>
            HA
          </Text>
        </View>
      </View>

      <View style={styles.listContainer}>
        <FlatList data={MockData} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};
