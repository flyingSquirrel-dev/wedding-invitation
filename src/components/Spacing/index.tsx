interface Props {
  size: number;
}

export function Spacing({ size }: Props) {
  return <div css={{ margin: `${size}px` }} />;
}
