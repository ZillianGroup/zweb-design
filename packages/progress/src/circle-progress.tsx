/** @jsxImportSource @emotion/react */
import { forwardRef } from "react"
import { ProgressProps } from "./interface"

export const CircleProgress = forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {

  const {
    type = "line",
    steps,
    status = "normal",
    color = "blue",
    trailColor = "gray",
    showText = true,
    formatText,
    percent = 0,
    ...otherProps
  }
    = props

  return <div ref={ref} {...otherProps}>

  </div>
})

CircleProgress.displayName = "CircleProgress"