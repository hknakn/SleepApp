import React, { useEffect } from "react";
import { useColorScheme } from "react-native";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, DetailScreen } from "@screens/index";
import { SCREENS } from "@shared-constants";
import { DarkTheme, LightTheme } from "@theme/themes";

const Stack = createStackNavigator();

const Navigation = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={isDarkMode ? DarkTheme : LightTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Stack.Screen name={SCREENS.DETAIL} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
