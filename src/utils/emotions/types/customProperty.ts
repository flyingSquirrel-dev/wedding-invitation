import { css } from "@emotion/react";

type ReturnTypeOfCss = ReturnType<typeof css>;

interface CustomerProperties {
  left: (value: string | number) => ReturnTypeOfCss;
  right: (value: string | number) => ReturnTypeOfCss;
  top: (value: string | number) => ReturnTypeOfCss;
  bottom: (value: string | number) => ReturnTypeOfCss;
}

type CustomEmotionStyleFunction = (
  marginOptions: string | number
) => ReturnTypeOfCss;

export type ObjectDefineProperty = Parameters<
  typeof Object.defineProperties
>[1];

export type EmotionCustomPropertyType = CustomEmotionStyleFunction &
  CustomerProperties &
  ReturnTypeOfCss;
