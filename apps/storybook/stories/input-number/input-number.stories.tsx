import { Meta, StoryFn } from "@storybook/react"
import { InputNumber, InputNumberProps, Space } from "@illa-design/react"
import { useState } from "react"

//👇 This default export determines where your story goes in the story list
export default {
  title: "DATA INPUT/InputNumber",
  component: InputNumber,
} as Meta

export const Basic: StoryFn<InputNumberProps> = (props) => {
  const [currentValue, setCurrentValue] = useState<number | undefined>(0)

  return (
    <Space direction="vertical" align="start">
      <InputNumber w="320px" {...props} mode="button" />
      <InputNumber
        w="320px"
        value={currentValue}
        precision={3}
        onChange={(v) => {
          setCurrentValue(v)
        }}
        mode="button"
      />
    </Space>
  )
}
