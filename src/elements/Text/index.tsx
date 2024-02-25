import React from "react";
import fonts from "@fonts";
import RNText from "@freakycoder/react-native-custom-text";
import type { IRNTextProps } from "@freakycoder/react-native-custom-text";

type TextWrapperProps = IRNTextProps & {
  color?: string;
  fontFamily?: string;
  children?: React.ReactNode;
};

export const TextWrapper = ({
  fontFamily = fonts.montserrat.regular,
  color = "#757575",
  children,
  ...rest
}: TextWrapperProps) => {
  return (
    <RNText fontFamily={fontFamily} color={color} {...rest}>
      {children}
    </RNText>
  );
};
