export const capitalizeText = (text: string) => {
  if (!text) return text;
  const splitName = text.split(" ");
  for (var i = 0; i < splitName.length; i++) {
    splitName[i] =
      splitName[i].charAt(0).toUpperCase() +
      splitName[i].slice(1).toLowerCase();
  }
  return splitName.join(" ");
};
