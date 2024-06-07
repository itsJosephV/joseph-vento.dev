export const stagger = (n: number): React.CSSProperties => {
  return {
    "--enter-stage": n,
  } as React.CSSProperties;
};
