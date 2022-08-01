import { ReactNode } from "react";
import { BOLD_FONT_WEIGHT, DEFAULT_FONT_SIZE } from "constant/style";

interface Props {
  text: ReactNode;
  size?: number;
  isBold?: boolean;
}

export default function Text({
  text,
  size = DEFAULT_FONT_SIZE,
  isBold = false,
}: Props) {
  return (
    <div
      css={[
        {
          fontSize: `${size}px`,
          fontWeight: isBold ? BOLD_FONT_WEIGHT : undefined,
          lineHeight: "30px",
        },
      ]}
    >
      {text}
    </div>
  );
}
