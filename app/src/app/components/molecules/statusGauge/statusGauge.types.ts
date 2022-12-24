export type Status = 'health'
| 'addiction'
| 'thirst'
| 'hunger'
| 'staff'
| 'armor'
| string;

type ComputedStatusValue = number;

export type WaveAnimationDuration = {
  index: number;
};

export type StatusGaugeOutterProps = {
  gaugeBlinkSpeed: ComputedStatusValue;
};

export type StatusGaugeInnerProps = {
  waveAlignmentValue: ComputedStatusValue;
};

export type StatusIconProps = {
  statusName: Status;
} & Pick<StatusGaugeProps, 'iconIsValue'
| 'statusValue'>;

export type StatusGaugeProps = {
  statusValue?: number | boolean | null;
  iconIsValue?: boolean;
  statusLabel: string;
  quota?: string;
  status: Status;
  show: boolean;
} & WaveAnimationDuration;
