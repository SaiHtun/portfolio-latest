export default function textInitialCapitalizer(
  text: string,
  initialCounts = 2
) {
  let textArray = text.split(" ");

  if (!(textArray.length > 1)) {
    return text.slice(0, 2).toUpperCase();
  }

  let str = "";
  for (let i = 0; i < Math.min(initialCounts, textArray.length); i++) {
    str += textArray[i][0];
  }
  return str.toUpperCase();
}
