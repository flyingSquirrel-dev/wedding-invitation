import { css } from "@emotion/react";

import { CUSTOM_PROPERTIES } from "./constant/properties";
import {
  EmotionCustomPropertyType,
  ObjectDefineProperty,
} from "./types/customProperty";

function createPadding() {
  const customDefineProperties: ObjectDefineProperty = {};

  const result = (paddingOption: string | number) => {
    const value =
      typeof paddingOption === "number" ? `${paddingOption}px` : paddingOption;

    return css`
      padding: ${value};
    `;
  };

  CUSTOM_PROPERTIES.forEach((prop) => {
    customDefineProperties[prop] = {
      value: (value: string | number) => {
        const paddingValue = typeof value === "number" ? `${value}px` : value;

        return css`
          padding-${prop}: ${paddingValue};
        `;
      },
    };
  });

  Object.defineProperties(result, customDefineProperties);

  return result as EmotionCustomPropertyType;
}

export const padding = createPadding();
