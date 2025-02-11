import { Meta, StoryFn } from "@storybook/react"
import { SingleWeekPickerProps, SingleWeekPicker } from "@zweb-design/react"

export default {
  title: "DATA INPUT/DatePicker",
  component: SingleWeekPicker,
} as Meta

export const WeekPicker: StoryFn<SingleWeekPickerProps> = (args) => {
  return <SingleWeekPicker {...args} />
}
