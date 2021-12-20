import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

export type ThemeCompositionsProps = HTMLAttributes<HTMLDivElement>;

export function ThemeCompositions({
  children,
  className,
  ...rest
}: ThemeCompositionsProps) {
  return (
    <div className={classNames(className)} {...rest}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
      {children}
    </div>
  );
}
