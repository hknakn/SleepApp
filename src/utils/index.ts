export const hexToRGBA = (hex: string, alpha: number) =>
  `${hex}${Math.floor(alpha * 255)
    .toString(16)
    .padStart(2, "0")}`;

export const numberToSleepStage = (num: number) => {
  switch (num) {
    case 4:
      return "out";
    case 3:
      return "awake";
    case 2:
      return "light";
    case 1:
      return "deep";
    default:
      return "unknown";
  }
};

export const sleepStageToNumber = (stage: string) => {
  switch (stage) {
    case "out":
      return 4;
    case "awake":
      return 3;
    case "light":
      return 2;
    case "deep":
      return 1;
    default:
      return 0;
  }
};
