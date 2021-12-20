import React from 'react';
import {
  Text as BaseText,
  TextProps as BaseTextProps,
  StyleSheet,
} from 'react-native';

export type TextProps = BaseTextProps;

export function Text({ children }: TextProps) {
  return <BaseText style={styles.text}>{children}</BaseText>;
}

const styles = StyleSheet.create({
  text: { fontFamily: 'Noto Sans' },
});
