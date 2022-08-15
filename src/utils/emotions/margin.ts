import { css } from "@emotion/react";

import { CUSTOM_PROPERTIES } from "./constant/properties";
import {
  EmotionCustomPropertyType,
  ObjectDefineProperty,
} from "./types/customProperty";

function createMargin() {
  const customDefineProperties: ObjectDefineProperty = {};

  const result = (marginOption: string | number) => {
    const marginValue =
      typeof marginOption === "number" ? `${marginOption}px` : marginOption;

    return css`
      margin: ${marginValue};
    `;
  };

  CUSTOM_PROPERTIES.forEach((prop) => {
    customDefineProperties[prop] = {
      value: (value: string | number) => {
        const marginValue = typeof value === "number" ? `${value}px` : value;

        return css`
          margin-${prop}: ${marginValue};
        `;
      },
    };
  });

  Object.defineProperties(result, customDefineProperties);

  return result as EmotionCustomPropertyType;
}

export const margin = createMargin();
