import React, { HTMLAttributes } from 'react';
// Load font using ttf file.
import './theme-compositions.css';

export type ThemeCompositionsProps = HTMLAttributes<HTMLDivElement>;

export function ThemeCompositions({
  children,
  ...rest
}: ThemeCompositionsProps) {
  return (
    <div {...rest}>
      {/* Load font using Google Fonts links */}
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
        rel="stylesheet"
      /> */}
      {children}
    </div>
  );
}
