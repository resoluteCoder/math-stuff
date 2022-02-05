export const randNumberFrom = (min, max) =>
  Math.floor(Math.random() * max + min);

export const operation = {
  "+": (n1, n2) => n1 + n2,
  "-": (n1, n2) => n1 - n2,
};
