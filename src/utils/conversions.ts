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

export const removeLeadingZeros = (hours: number, minutes: number) => {
  if (hours === 0) {
    return `${minutes} minutes`;
  } else {
    return `${hours} hours ${minutes} minutes`;
  }
};

export const secondsToHms = (seconds: number) => ({
  hours: (seconds - (seconds % 3600)) / 3600,
  minutes: ((seconds - (seconds % 60)) / 60) % 60,
  seconds: seconds % 60,
});
