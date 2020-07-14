export const roundMetrics = (metric) => {
  let rounded = 0;
  metric < 10000 ? (rounded = metric) : (rounded = metric / 1000 + "k");
  return rounded;
};
