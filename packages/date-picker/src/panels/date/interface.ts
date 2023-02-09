import { Dayjs } from "dayjs"
import { PrivateCType, SingleDatePickerProps, ModeType } from "../../interface"

export interface DatePickerPanelProps
  extends SingleDatePickerProps,
    PrivateCType {
  onTimePickerSelect?: (timeString: string, time: Dayjs) => void
  onMouseEnterCell?: (time: Dayjs, disabled: boolean) => void
  onMouseLeaveCell?: (time: Dayjs, disabled: boolean) => void
  pageShowDate?: Dayjs
  isRangePicker?: boolean
  rangeValues?: Dayjs[]
  isWeek?: boolean
  onPrev?: () => void
  onNext?: () => void
  onSuperPrev?: () => void
  onSuperNext?: () => void
  isSameTime?: (current: Dayjs, target: Dayjs) => boolean
  format?: string
  index?: number
  timeValue?: Dayjs
  isTimePanel?: boolean
  panelMode?: ModeType
  setPanelMode?: (mode: ModeType) => void
}
