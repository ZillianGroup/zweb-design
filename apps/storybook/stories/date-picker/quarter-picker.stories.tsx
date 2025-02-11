import { Meta, StoryFn } from "@storybook/react"
import {
  SingleQuarterPicker,
  SingleQuarterPickerProps,
} from "@zweb-design/react"

export default {
  title: "DATA INPUT/DatePicker",
  component: SingleQuarterPicker,
} as Meta

export const QuarterPicker: StoryFn<SingleQuarterPickerProps> = (args) => {
  return <SingleQuarterPicker {...args} />
}
