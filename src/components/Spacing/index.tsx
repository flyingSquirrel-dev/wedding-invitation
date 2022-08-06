interface Props {
  size: number;
}

export function Spacing({ size }: Props) {
  return <div css={{ margin: `${size}px 0 0 0`, display: "flex" }} />;
}
