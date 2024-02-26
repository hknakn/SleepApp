import { SleepSession, SleepStage } from "@screens/home/mock/type";

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

export const calculateBedTemperature = (interval: SleepSession): number => {
  let totalBedTemperature = 0;
  let bedTemperatureCount = 0;

  interval.timeseries.tempBedC.forEach((tempBedCArray) => {
    const tempBedC = tempBedCArray[1] as number;
    if (tempBedC) {
      totalBedTemperature += tempBedC;
      bedTemperatureCount++;
    }
  });

  return Math.round(totalBedTemperature / bedTemperatureCount);
};

export const calculateAverageBedTemperature = (
  intervals: SleepSession[],
): number => {
  let totalBedTemperature = 0;
  let bedTemperatureCount = 0;

  intervals.forEach((interval) => {
    interval.timeseries.tempBedC.forEach((tempBedCArray) => {
      const tempBedC = tempBedCArray[1] as number;
      if (tempBedC) {
        totalBedTemperature += tempBedC;
        bedTemperatureCount++;
      }
    });
  });

  return Math.round(totalBedTemperature / bedTemperatureCount);
};

export const calculateTossAndTurns = (interval: SleepSession): number => {
  let tossAndTurns = 0;
  interval.timeseries.tnt.forEach((tntArray) => {
    const tnt = tntArray[1] as number;
    if (tnt) {
      tossAndTurns += tnt;
    }
  });

  return tossAndTurns;
};

export const calculateAverageTossAndTurns = (
  intervals: SleepSession[],
): number => {
  let totalTossAndTurns = 0;
  intervals.forEach((interval) => {
    interval.timeseries.tnt.forEach((tntArray) => {
      const tnt = tntArray[1] as number;
      if (tnt) {
        totalTossAndTurns += tnt;
      }
    });
  });

  return Math.round(totalTossAndTurns / intervals.length);
};

export const calculateRespiratoryRate = (interval: SleepSession): number => {
  let totalRespiratoryRate = 0;
  let respiratoryRateCount = 0;

  interval.timeseries.respiratoryRate.forEach((respiratoryRateArray) => {
    const respiratoryRate = respiratoryRateArray[1] as number;
    if (respiratoryRate) {
      totalRespiratoryRate += respiratoryRate;
      respiratoryRateCount++;
    }
  });

  return Math.round(totalRespiratoryRate / respiratoryRateCount);
};

export const calculateAverageRespiratoryRate = (
  intervals: SleepSession[],
): number => {
  let totalRespiratoryRate = 0;
  let respiratoryRateCount = 0;

  intervals.forEach((interval) => {
    interval.timeseries.respiratoryRate.forEach((respiratoryRateArray) => {
      const respiratoryRate = respiratoryRateArray[1] as number;
      if (respiratoryRate) {
        totalRespiratoryRate += respiratoryRate;
        respiratoryRateCount++;
      }
    });
  });

  return Math.round(totalRespiratoryRate / respiratoryRateCount);
};

export const calculateTimeToSleep = (stages: SleepStage[]): string => {
  let sleepPeriods = 1;
  let awakeDuration = 0;

  for (let i = 0; i < stages.length; i++) {
    if (
      stages[i].stage === "awake" &&
      stages[i + 1]?.stage &&
      stages[i + 1]?.stage !== "awake"
    ) {
      sleepPeriods++;
      awakeDuration += stages[i].duration;
    }
  }

  const { hours, minutes } = secondsToHms(awakeDuration / sleepPeriods);
  return removeLeadingZeros(hours, minutes);
};

export const calculateHeartRate = (interval: SleepSession): number => {
  let totalHeartRate = 0;
  let heartRateCount = 0;

  interval.timeseries.heartRate.forEach((heartRateArray) => {
    const heartRate = heartRateArray[1] as number;
    if (heartRate) {
      totalHeartRate += heartRate;
      heartRateCount++;
    }
  });

  return Math.round(totalHeartRate / heartRateCount);
};

export const calculateAverageHeartRate = (
  intervals: SleepSession[],
): number => {
  let totalHeartRate = 0;
  let heartRateCount = 0;

  intervals.forEach((interval) => {
    interval.timeseries.heartRate.forEach((heartRateArray) => {
      const heartRate = heartRateArray[1] as number;
      if (heartRate) {
        totalHeartRate += heartRate;
        heartRateCount++;
      }
    });
  });

  return Math.round(totalHeartRate / heartRateCount);
};

export const calculateAverageTimeToSleep = (
  intervals: SleepSession[],
): string => {
  let sleepPeriods = 1;
  let awakeDuration = 0;

  intervals.forEach((interval) => {
    for (let i = 0; i < interval.stages.length; i++) {
      if (
        interval.stages[i].stage === "awake" &&
        interval.stages[i + 1]?.stage &&
        interval.stages[i + 1]?.stage !== "awake"
      ) {
        sleepPeriods++;
        awakeDuration += interval.stages[i].duration;
      }
    }
  });

  const { hours, minutes } = secondsToHms(awakeDuration / sleepPeriods);
  return removeLeadingZeros(hours, minutes);
};

export const calculateAverageSleepScore = (
  intervals: SleepSession[],
): number => {
  let totalScore = 0;
  intervals.forEach((interval) => {
    totalScore += interval.score;
  });
  return Math.round(totalScore / intervals.length);
};

const removeLeadingZeros = (hours: number, minutes: number) => {
  if (hours === 0) {
    return `${minutes} minutes`;
  } else {
    return `${hours} hours ${minutes} minutes`;
  }
};

const secondsToHms = (seconds: number) => ({
  hours: (seconds - (seconds % 3600)) / 3600,
  minutes: ((seconds - (seconds % 60)) / 60) % 60,
  seconds: seconds % 60,
});
