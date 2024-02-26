import React, { useMemo } from "react";
import { TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import createStyles from "./style";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { Text } from "elements";
import * as NavigationService from "react-navigation-helpers";

type HeaderProps = {
  fullName: string;
};

const Header = ({ fullName }: HeaderProps) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const onBackPress = () => {
    // Go back to the previous screen
    NavigationService.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity hitSlop={10} onPress={onBackPress} testID="backButton">
        <Icon
          name="chevron-back-outline"
          type={IconType.Ionicons}
          size={24}
          color={colors.text}
        />
      </TouchableOpacity>
      <Text h4 bold color={colors.text}>
        {fullName}
      </Text>
      <View style={styles.rightSide} />
    </View>
  );
};

export { Header };
