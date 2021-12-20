import React from 'react';
import {
  Text as BaseText,
  TextProps as BaseTextProps,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';

export type TextProps = BaseTextProps;

export type StamProps = {
  text: string;
};

export function Stam({ text }: StamProps) {
  return <View>{text}</View>;
}

export function Text({ children }: TextProps) {
  return <BaseText style={styles.text}>{children}</BaseText>;
}

const styles = StyleSheet.create({
  text: { fontFamily: 'Noto Sans' },
});
