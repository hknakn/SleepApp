export type SleepStage = {
  stage: "awake" | "out" | "light" | "deep";
  duration: number;
};

type TimeSeriesData = {
  tnt: Array<[string, number]>;
  tempRoomC: Array<[string, number]>;
  tempBedC: Array<[string, number]>;
  respiratoryRate: Array<[string, number]>;
  heartRate: Array<[string, number]>;
  heating: Array<[string, number]>;
};

export type SleepSession = {
  id: string;
  ts: string;
  stages: SleepStage[];
  score: number;
  timeseries: TimeSeriesData;
};

type SleepData = {
  intervals: SleepSession[];
};

export default SleepData;
