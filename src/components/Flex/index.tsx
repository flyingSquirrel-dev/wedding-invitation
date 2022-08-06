import { CSSProperties, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  direction?: CSSProperties["flexDirection"];
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  isWidth100?: boolean;
  className?: string;
}

export function Flex({
  children,
  direction = "row",
  align,
  justify = "flex-start",
  className,
  isWidth100 = true,
  ...rest
}: Props) {
  return (
    <div
      css={[
        { ...(isWidth100 && { width: "100%" }) },
        {
          display: "flex",
          justifyContent: justify,
          alignItems: align,
          flexDirection: direction,
        },
      ]}
      className={className}
      {...rest}
    >
      {children}
    </div>
  );
}
