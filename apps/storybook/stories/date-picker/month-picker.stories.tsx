import { Meta, StoryFn } from "@storybook/react"
import { SingleMonthPicker, SingleMonthPickerProps } from "@zweb-design/react"

export default {
  title: "DATA INPUT/DatePicker",
  component: SingleMonthPicker,
} as Meta

export const MonthPicker: StoryFn<SingleMonthPickerProps> = (args) => {
  return <SingleMonthPicker {...args} />
}
