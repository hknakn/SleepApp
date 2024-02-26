import React, { useCallback, useMemo } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationService from "react-navigation-helpers";
import createStyles from "./style";
import { useTheme } from "@react-navigation/native";
import { SCREENS } from "@shared-constants";
import { MockData, UserData } from "../../data";
import { PersonCard } from "./person-card";
import { Header } from "./header";

export const HomeScreen = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const handleItemPress = useCallback((item: UserData) => {
    NavigationService.push(SCREENS.DETAIL, { data: item });
  }, []);

  const renderItem = useCallback(
    ({ item, index }: { item: UserData; index: number }) => (
      <PersonCard
        testID={`person-card-${index}`}
        data={item}
        onPress={() => handleItemPress(item)}
      />
    ),
    [handleItemPress],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={MockData}
        renderItem={renderItem}
        ListHeaderComponent={<Header />}
      />
    </SafeAreaView>
  );
};
