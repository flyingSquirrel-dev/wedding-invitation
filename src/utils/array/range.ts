export function range(start: number, end: number): number[] {
  const rangeArray = [];

  for (let i = start; i <= end; i++) {
    rangeArray.push(i);
  }

  return rangeArray;
}
