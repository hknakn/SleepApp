import React, { useEffect } from "react";
import { LogBox, StatusBar, useColorScheme } from "react-native";
import "react-native-gesture-handler";
import Navigation from "./src/navigation";
import { translations } from "shared/localization";

LogBox.ignoreAllLogs();

const App = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";
  translations.setLanguage("en");

  useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
  }, [scheme, isDarkMode]);

  return <Navigation />;
};

export default App;
