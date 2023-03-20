export const formatDataset = (x = [], y = []) => {
  return x.map((x, index) => {
    return {
      x: x,
      y: y[index],
    };
  });
};
