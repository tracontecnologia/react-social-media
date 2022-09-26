type Props = {
  width?: string | number;
  height?: string | number;
  children: React.ReactNode;
};

export function ResponsiveIcon({ width, height, children }: Props) {
  return <div style={{ width, height }}>{children}</div>;
}
