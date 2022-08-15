import { BOLD_FONT_WEIGHT, DEFAULT_FONT_SIZE } from "constant/style";
import { ReactNode } from "react";

interface Props {
  text: ReactNode;
  size?: number;
  isBold?: boolean;
  className?: string;
}

export default function Text({
  text,
  size = DEFAULT_FONT_SIZE,
  isBold = false,
  className,
  ...rest
}: Props) {
  return (
    <div
      css={[
        {
          fontSize: `${size}px`,
          fontWeight: isBold ? BOLD_FONT_WEIGHT : undefined,
          lineHeight: `${size + 10}px`,
          letterSpacing: "1.6px",
        },
      ]}
      className={className}
      {...rest}
    >
      {text}
    </div>
  );
}
