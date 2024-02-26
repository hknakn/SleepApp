import React, { useEffect } from "react";
import { LogBox, StatusBar, useColorScheme } from "react-native";
import "react-native-gesture-handler";
import Navigation from "./src/navigation";

LogBox.ignoreAllLogs();

const App = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
  }, [scheme, isDarkMode]);

  return <Navigation />;
};

export default App;
