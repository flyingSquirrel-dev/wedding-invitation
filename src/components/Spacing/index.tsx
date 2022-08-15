interface Props {
  size: number;
  className?: string;
}

export function Spacing({ size, className }: Props) {
  return (
    <div
      css={{ margin: `${size}px 0 0 0`, display: "flex" }}
      className={className}
    />
  );
}
